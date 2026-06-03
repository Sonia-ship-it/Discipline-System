import { useState, useEffect, useMemo } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/RCA/Badges';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  Filter,
  ClipboardCheck,
  UserCheck,
  UserX,
  Calendar,
  Send,
  GraduationCap,
  Save,
  Bell,
} from 'lucide-react';
import { apiFetch } from '@/lib/api';
import { toast } from 'sonner';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { EmptyState } from '@/components/RCA/EmptyState';
import { NewTermModal } from '@/components/discipline/NewTermModal';
import { TestNotificationModal } from '@/components/discipline/TestNotificationModal';

type AttendanceStatus = 'PRESENT' | 'ABSENT' | 'LATE' | 'EXCUSED';

interface AttendanceRow {
  student: {
    id: number;
    firstName: string;
    lastName: string;
    year: string;
    classGroup: string;
    fatherPhoneNumber: string;
    motherPhoneNumber: string;
  };
  attendance: {
    id: number;
    status: AttendanceStatus;
    note?: string | null;
  } | null;
}

interface AcademicTerm {
  id: number;
  name: string;
  startDate: string;
  endDate?: string | null;
  isActive: boolean;
}

const STATUS_OPTIONS: AttendanceStatus[] = ['PRESENT', 'ABSENT', 'LATE', 'EXCUSED'];

export default function AttendanceList() {
  const queryClient = useQueryClient();
  const [classFilter, setClassFilter] = useState('All');
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));
  const [localStatus, setLocalStatus] = useState<Record<number, AttendanceStatus>>({});
  const [termModalOpen, setTermModalOpen] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [notifying, setNotifying] = useState(false);

  const { data: activeTerm } = useQuery<AcademicTerm | null>({
    queryKey: ['terms', 'active'],
    queryFn: async () => {
      const res = await apiFetch('/terms/active');
      return res ?? null;
    },
    staleTime: 1000 * 60 * 5,
  });

  const { data: terms = [] } = useQuery<AcademicTerm[]>({
    queryKey: ['terms'],
    queryFn: () => apiFetch('/terms'),
    staleTime: 1000 * 60 * 5,
  });

  const queryParams = useMemo(() => {
    const p = new URLSearchParams({ date: selectedDate });
    if (activeTerm?.id) p.set('termId', String(activeTerm.id));
    const { year, classGroup } = (() => {
      if (classFilter === 'All') return { year: '', classGroup: '' };
      const match = classFilter.match(/^Year (.+) (.+)$/);
      if (!match) return { year: '', classGroup: '' };
      return { year: match[1], classGroup: match[2] };
    })();
    if (year) p.set('year', year);
    if (classGroup) p.set('classGroup', classGroup);
    return p.toString();
  }, [selectedDate, classFilter, activeTerm?.id]);

  const { data: rows = [], isLoading: loading } = useQuery<AttendanceRow[]>({
    queryKey: ['attendance', queryParams],
    queryFn: () => apiFetch(`/attendance?${queryParams}`),
    enabled: !!activeTerm,
    staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    const next: Record<number, AttendanceStatus> = {};
    rows.forEach((r) => {
      next[r.student.id] = r.attendance?.status ?? 'PRESENT';
    });
    setLocalStatus(next);
  }, [rows]);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const className = `Year ${r.student.year} ${r.student.classGroup}`;
      const fullName = `${r.student.firstName} ${r.student.lastName}`.toLowerCase();
      if (classFilter !== 'All' && className !== classFilter) return false;
      if (searchFilter && !fullName.includes(searchFilter.toLowerCase())) return false;
      return true;
    });
  }, [rows, classFilter, searchFilter]);

  const classes = useMemo(
    () => Array.from(new Set(rows.map((r) => `Year ${r.student.year} ${r.student.classGroup}`))),
    [rows],
  );

  const presentCount = useMemo(
    () => filtered.filter((r) => (localStatus[r.student.id] ?? 'PRESENT') === 'PRESENT').length,
    [filtered, localStatus],
  );
  const absentCount = useMemo(
    () => filtered.filter((r) => localStatus[r.student.id] === 'ABSENT').length,
    [filtered, localStatus],
  );

  const invalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['attendance'] });
    queryClient.invalidateQueries({ queryKey: ['terms'] });
  };

  const parseClassFilter = () => {
    if (classFilter === 'All') return { year: undefined, classGroup: undefined };
    const match = classFilter.match(/^Year (.+) (.+)$/);
    if (!match) return { year: undefined, classGroup: undefined };
    return { year: match[1], classGroup: match[2] };
  };

  const handleTermOpening = async () => {
    if (!activeTerm) {
      toast.error('Create and activate an academic term first');
      setTermModalOpen(true);
      return;
    }
    const { year, classGroup } = parseClassFilter();
    try {
      const res = await apiFetch('/attendance/term-opening', {
        method: 'POST',
        body: JSON.stringify({
          termId: activeTerm.id,
          date: selectedDate,
          year,
          classGroup,
        }),
      });
      toast.success(res.message || 'Term opening attendance marked');
      invalidate();
    } catch {
      toast.error('Failed to mark term opening attendance');
    }
  };

  const handleSaveAttendance = async () => {
    if (!activeTerm) {
      toast.error('No active term');
      return;
    }
    setSaving(true);
    try {
      const records = filtered.map((r) => ({
        studentId: r.student.id,
        status: localStatus[r.student.id] ?? 'PRESENT',
      }));
      await apiFetch('/attendance/mark', {
        method: 'POST',
        body: JSON.stringify({
          termId: activeTerm.id,
          date: selectedDate,
          records,
        }),
      });
      toast.success(`Saved attendance for ${records.length} students`);
      invalidate();
    } catch {
      toast.error('Failed to save attendance');
    } finally {
      setSaving(false);
    }
  };

  const handleNotifyAbsent = async () => {
    if (!activeTerm) return;
    const absentIds = filtered
      .filter((r) => localStatus[r.student.id] === 'ABSENT')
      .map((r) => r.student.id);
    if (absentIds.length === 0) {
      toast.info('No absent students to notify');
      return;
    }
    setNotifying(true);
    try {
      const res = await apiFetch('/notifications/parent', {
        method: 'POST',
        body: JSON.stringify({
          termId: activeTerm.id,
          date: selectedDate,
          type: 'ABSENCE_ALERT',
          studentIds: absentIds,
        }),
      });
      toast.success(res.message || `Notified parents (${res.sent} sent)`);
    } catch {
      toast.error('Failed to send parent notifications');
    } finally {
      setNotifying(false);
    }
  };

  const handleNotifyTermOpening = async () => {
    if (!activeTerm) return;
    setNotifying(true);
    try {
      const res = await apiFetch('/notifications/parent', {
        method: 'POST',
        body: JSON.stringify({
          termId: activeTerm.id,
          date: selectedDate,
          type: 'TERM_OPENING',
        }),
      });
      toast.success(res.message || `Term opening messages sent (${res.sent})`);
    } catch {
      toast.error('Failed to send term opening messages');
    } finally {
      setNotifying(false);
    }
  };

  const handleActivateTerm = async (id: number) => {
    try {
      await apiFetch(`/terms/${id}/activate`, { method: 'PATCH' });
      toast.success('Term activated');
      invalidate();
    } catch {
      toast.error('Failed to activate term');
    }
  };

  if (!activeTerm && !loading) {
    return (
      <div className="min-h-screen bg-white text-[#0A0E2E]">
        <AppHeader title="Attendance" subtitle="Start-of-term roll call & parent alerts" />
        <div className="mx-auto max-w-7xl px-6 py-8">
          <EmptyState
            icon={GraduationCap}
            title="No active academic term"
            description="Create a term to mark attendance at the start of term and notify parents."
            actionLabel="Create term"
            onAction={() => setTermModalOpen(true)}
          />
        </div>
        <NewTermModal
          isOpen={termModalOpen}
          onClose={() => setTermModalOpen(false)}
          onSuccess={invalidate}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#0A0E2E]">
      <AppHeader title="Attendance" subtitle="Start-of-term roll call & parent alerts" />

      <div className="mx-auto max-w-7xl px-6 py-8 animate-in fade-in duration-700">
        <div className="mb-6 rounded-md border border-[#0A0E2E]/15 bg-white p-6 shadow-sm">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0A0E2E]">Term attendance</h2>
              <p className="text-sm font-medium text-[#0A0E2E]/70">
                Active term: <span className="font-bold">{activeTerm?.name}</span>
                {' · '}
                {new Date(activeTerm!.startDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                onClick={() => setTestModalOpen(true)}
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
              >
                <Send className="h-4 w-4 mr-2" /> Test Notifications
              </Button>
              <Button
                variant="outline"
                onClick={() => setTermModalOpen(true)}
                className="border-[#0A0E2E]/15 text-[#0A0E2E]"
              >
                <GraduationCap className="h-4 w-4 mr-2" /> New term
              </Button>
              <Button
                onClick={handleTermOpening}
                className="bg-[#0A0E2E] hover:bg-[#1a264a] text-white"
              >
                <ClipboardCheck className="h-4 w-4 mr-2" /> Mark all present (term opening)
              </Button>
              <Button
                variant="outline"
                onClick={handleNotifyTermOpening}
                disabled={notifying}
                className="border-[#0A0E2E]/15"
              >
                <Send className="h-4 w-4 mr-2" /> Notify parents (term start)
              </Button>
            </div>
          </div>

          {terms.length > 1 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {terms.map((t) => (
                <button
                  key={t.id}
                  onClick={() => !t.isActive && handleActivateTerm(t.id)}
                  className={`rounded-md px-3 py-1 text-xs font-bold border transition-all ${
                    t.isActive
                      ? 'bg-[#0A0E2E] text-white border-[#0A0E2E]'
                      : 'border-[#0A0E2E]/20 text-[#0A0E2E]/70 hover:bg-[#0A0E2E]/5'
                  }`}
                >
                  {t.name}
                  {t.isActive ? ' (active)' : ''}
                </button>
              ))}
            </div>
          )}

          <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-md border border-[#0A0E2E]/15 bg-white p-4">
              <div className="mb-2 inline-flex rounded-md bg-[#0A0E2E] p-2 text-white">
                <UserCheck className="h-4 w-4" />
              </div>
              <p className="text-xs font-semibold text-[#0A0E2E]/65">Present (visible)</p>
              <p className="text-2xl font-extrabold text-[#0A0E2E]">{presentCount}</p>
            </div>
            <div className="rounded-md border border-[#0A0E2E]/15 bg-white p-4">
              <div className="mb-2 inline-flex rounded-md bg-[#0A0E2E] p-2 text-white">
                <UserX className="h-4 w-4" />
              </div>
              <p className="text-xs font-semibold text-[#0A0E2E]/65">Absent (visible)</p>
              <p className="text-2xl font-extrabold text-[#0A0E2E]">{absentCount}</p>
            </div>
            <div className="rounded-md border border-[#0A0E2E]/15 bg-white p-4">
              <div className="mb-2 inline-flex rounded-md bg-[#0A0E2E] p-2 text-white">
                <Calendar className="h-4 w-4" />
              </div>
              <p className="text-xs font-semibold text-[#0A0E2E]/65">Date</p>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="mt-1 w-full rounded-md border border-[#0A0E2E]/15 px-2 py-1 text-sm font-bold text-[#0A0E2E]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A0E2E]/50" />
              <input
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search students..."
                className="w-full rounded-md border border-[#0A0E2E]/15 bg-white py-2.5 pl-10 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-[#0A0E2E]/15"
              />
            </div>
            <Select value={classFilter} onValueChange={setClassFilter}>
              <SelectTrigger className="h-10 min-w-[160px] rounded-md border border-[#0A0E2E]/15">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-[#0A0E2E]/50" />
                  <SelectValue placeholder="All Classes" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-[#0A0E2E] border-white/10 text-white">
                <SelectItem value="All">All Classes</SelectItem>
                {classes.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap justify-end gap-2">
          <Button
            variant="outline"
            onClick={handleNotifyAbsent}
            disabled={notifying || absentCount === 0}
            className="border-rose-200 text-rose-700 hover:bg-rose-50"
          >
            <Bell className="h-4 w-4 mr-2" /> Notify absent parents ({absentCount})
          </Button>
          <Button
            onClick={handleSaveAttendance}
            disabled={saving}
            className="bg-[#0A0E2E] hover:bg-[#1a264a] text-white"
          >
            <Save className="h-4 w-4 mr-2" /> {saving ? 'Saving…' : 'Save attendance'}
          </Button>
        </div>

        <div className="overflow-hidden rounded-md border border-[#0A0E2E]/15 bg-white shadow-xl shadow-[#0A0E2E]/5">
          {loading ? (
            <div className="p-12 text-center text-sm text-[#0A0E2E]/60">Loading attendance…</div>
          ) : filtered.length === 0 ? (
            <EmptyState
              icon={ClipboardCheck}
              title="No students"
              description="Add students or adjust filters to mark attendance."
            />
          ) : (
            <Table>
              <TableHeader className="border-b border-[#0A0E2E]/10 bg-[#0A0E2E]/5">
                <TableRow>
                  <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/80">Student</TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/80">Class</TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/80">Parent phone</TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/80">Attendance</TableHead>
                  <TableHead className="text-right font-bold text-[#0A0E2E]/80">Saved</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((row) => {
                  const status = localStatus[row.student.id] ?? 'PRESENT';
                  return (
                    <TableRow key={row.student.id} className="border-[#0A0E2E]/10 hover:bg-[#0A0E2E]/5">
                      <TableCell className="px-6 py-4 font-bold">
                        {row.student.firstName} {row.student.lastName}
                      </TableCell>
                      <TableCell className="text-sm">
                        Year {row.student.year} {row.student.classGroup}
                      </TableCell>
                      <TableCell className="text-xs text-[#0A0E2E]/70">
                        {row.student.fatherPhoneNumber || row.student.motherPhoneNumber}
                      </TableCell>
                      <TableCell>
                        <Select
                          value={status}
                          onValueChange={(v) =>
                            setLocalStatus((prev) => ({
                              ...prev,
                              [row.student.id]: v as AttendanceStatus,
                            }))
                          }
                        >
                          <SelectTrigger className="h-9 w-[130px] border-[#0A0E2E]/15">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {STATUS_OPTIONS.map((s) => (
                              <SelectItem key={s} value={s}>
                                {s}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </TableCell>
                      <TableCell className="text-right">
                        {row.attendance ? (
                          <StatusBadge status={row.attendance.status} />
                        ) : (
                          <span className="text-xs text-[#0A0E2E]/40">Unsaved</span>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </div>

      <NewTermModal
        isOpen={termModalOpen}
        onClose={() => setTermModalOpen(false)}
        onSuccess={invalidate}
      />

      <TestNotificationModal
        isOpen={testModalOpen}
        onClose={() => setTestModalOpen(false)}
        students={rows.map((r) => r.student)}
      />
    </div>
  );
}
