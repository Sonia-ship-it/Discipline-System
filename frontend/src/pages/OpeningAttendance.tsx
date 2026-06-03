import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/RCA/EmptyState';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search, CalendarCheck, Users, CheckCircle, Clock, BarChart3, User } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

interface TermSession {
  id: number;
  name: string;
  year: number;
  startDate: string;
  endDate: string;
  openingDate: string;
  isActive: boolean;
}

interface Attendance {
  id: number;
  status: 'REPORTED' | 'NOT_REPORTED';
  arrivalTime: string | null;
  student: {
    id: number;
    firstName: string;
    lastName: string;
    year: string;
    classGroup: string;
  };
  recordedBy: {
    firstName: string;
    lastName: string;
  } | null;
}

interface Dashboard {
  expected: number;
  reported: number;
  notReported: number;
  percentage: number;
}

export default function OpeningAttendance() {
  const queryClient = useQueryClient();
  const [selectedTerm, setSelectedTerm] = useState<TermSession | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'ALL' | 'REPORTED' | 'NOT_REPORTED'>('ALL');

  const { data: terms = [], isLoading: loadingTerms } = useQuery<TermSession[]>({
    queryKey: ['opening-term-sessions'],
    queryFn: () => apiFetch('/opening-attendance/term-sessions'),
    staleTime: 1000 * 60 * 5,
  });

  const { data: attendances = [], isLoading: loadingAttendances, refetch: refetchAttendances } = useQuery<Attendance[]>({
    queryKey: ['opening-attendances', selectedTerm?.id],
    queryFn: () => apiFetch(`/opening-attendance/terms/${selectedTerm?.id}/attendances`),
    enabled: !!selectedTerm?.id,
    staleTime: 1000 * 60 * 2,
  });

  const { data: dashboard, refetch: refetchDashboard } = useQuery<Dashboard>({
    queryKey: ['opening-dashboard', selectedTerm?.id],
    queryFn: () => apiFetch(`/opening-attendance/terms/${selectedTerm?.id}/dashboard`),
    enabled: !!selectedTerm?.id,
    staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    if (terms.length > 0 && !selectedTerm) {
      const active = terms.find((t) => t.isActive);
      if (active) setSelectedTerm(active);
    }
  }, [terms, selectedTerm]);

  const initializeTerm = async () => {
    if (!selectedTerm) return;
    try {
      await apiFetch(`/opening-attendance/term-sessions/${selectedTerm.id}/initialize`, {
        method: 'POST',
      });
      toast.success('Term attendance initialized successfully');
      refetchAttendances();
      refetchDashboard();
    } catch (error) {
      toast.error('Failed to initialize term attendance');
    }
  };

  const markAttendance = async (studentId: number, status: 'REPORTED' | 'NOT_REPORTED') => {
    try {
      await apiFetch('/opening-attendance/mark', {
        method: 'POST',
        body: JSON.stringify({
          termId: selectedTerm?.id,
          studentId,
          status,
          arrivalTime: new Date(),
        }),
      });
      toast.success(status === 'REPORTED' ? 'Student marked as reported' : 'Attendance unmarked');
      refetchAttendances();
      refetchDashboard();
    } catch (error) {
      toast.error('Failed to update attendance');
    }
  };

  const formatTime = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatClass = (year: string, classGroup: string) => {
    // Format: "Year 1 A", "Year 2 B", etc.
    return `Year ${year} ${classGroup}`;
  };

  const filteredAttendances = attendances.filter((att) => {
    const fullClass = formatClass(att.student.year, att.student.classGroup);
    const matchesSearch =
      att.student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      att.student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fullClass.toLowerCase().includes(searchQuery.toLowerCase()) ||
      att.student.classGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      att.student.year.includes(searchQuery);
    const matchesFilter = filterStatus === 'ALL' || att.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50/50 text-[#0A0E2E]">
      <AppHeader title="School Opening Day Attendance" subtitle="Track Student Return for New Term" />

      <div className="mx-auto max-w-7xl px-6 py-8 animate-in fade-in duration-700">
        {/* Term Selection & Dashboard */}
        <div className="mb-6 rounded-md border border-[#0A0E2E]/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0A0E2E]">
                <CalendarCheck className="h-6 w-6" />
                Opening Day Attendance
                {dashboard && (
                  <span className="rounded-full bg-[#0A0E2E] px-3 py-0.5 text-xs font-medium text-white">
                    {dashboard.percentage}% REPORTED
                  </span>
                )}
              </h2>
              <p className="mt-1 text-sm font-medium text-[#0A0E2E]/60">
                Monitor student arrivals at the start of term.
              </p>
            </div>
            <Link href="/opening-attendance-reports">
              <Button className="rounded-md bg-[#0A0E2E] text-white shadow-lg shadow-[#0A0E2E]/20 hover:bg-[#1a264a] font-bold">
                <BarChart3 className="h-4 w-4 mr-2" /> View Reports
              </Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-xs font-bold text-[#0A0E2E]/70 uppercase tracking-wider mb-2">
                Select Term
              </label>
              <select
                className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                value={selectedTerm?.id || ''}
                onChange={(e) => {
                  const term = terms.find((t) => t.id === +e.target.value);
                  setSelectedTerm(term || null);
                }}
              >
                <option value="">Select a term...</option>
                {terms.map((term) => (
                  <option key={term.id} value={term.id}>
                    {term.name} {term.year} {term.isActive && '(Active)'}
                  </option>
                ))}
              </select>
            </div>
            {selectedTerm && (
              <div className="flex items-end">
                <Button
                  onClick={initializeTerm}
                  variant="outline"
                  className="border-[#0A0E2E]/20 text-[#0A0E2E] font-bold hover:bg-[#0A0E2E] hover:text-white"
                >
                  <Users className="h-4 w-4 mr-2" /> Initialize Term Attendance
                </Button>
              </div>
            )}
          </div>

          {/* Dashboard Stats */}
          {dashboard && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-md border border-[#0A0E2E]/15 bg-white p-4">
                <p className="text-[11px] font-bold text-[#0A0E2E]/60">EXPECTED</p>
                <p className="mt-1 text-2xl font-extrabold text-[#0A0E2E]">{dashboard.expected}</p>
              </div>
              <div className="rounded-md border border-emerald-200 bg-emerald-50/50 p-4">
                <p className="text-[11px] font-bold text-emerald-600">REPORTED</p>
                <p className="mt-1 text-2xl font-extrabold text-emerald-600">{dashboard.reported}</p>
              </div>
              <div className="rounded-md border border-red-200 bg-red-50/50 p-4">
                <p className="text-[11px] font-bold text-red-600">NOT REPORTED</p>
                <p className="mt-1 text-2xl font-extrabold text-red-600">{dashboard.notReported}</p>
              </div>
              <div className="rounded-md border border-blue-200 bg-blue-50/50 p-4">
                <p className="text-[11px] font-bold text-blue-600">RATE</p>
                <p className="mt-1 text-2xl font-extrabold text-blue-600">{dashboard.percentage}%</p>
              </div>
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-md border border-[#0A0E2E]/10 bg-white p-4 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A0E2E]/40" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student name or class..."
                className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
              />
            </div>
            <select
              className="rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
            >
              <option value="ALL">All Students</option>
              <option value="REPORTED">Reported</option>
              <option value="NOT_REPORTED">Not Yet Reported</option>
            </select>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="overflow-hidden rounded-md border border-[#0A0E2E]/10 bg-white shadow-xl shadow-[#0A0E2E]/5">
          {loadingAttendances ? (
            <div className="p-20 text-center space-y-4">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0A0E2E] border-t-transparent" />
              <p className="animate-pulse font-medium text-[#0A0E2E]/60 text-sm">Loading Attendance...</p>
            </div>
          ) : filteredAttendances.length === 0 ? (
            <div className="py-12">
              <EmptyState
                icon={CalendarCheck}
                title="No Attendance Records"
                description={
                  selectedTerm
                    ? 'Click "Initialize Term Attendance" to create records for all students.'
                    : 'Please select a term to view attendance records.'
                }
              />
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-[#0A0E2E]/5">
                <TableRow className="hover:bg-transparent border-slate-100">
                  <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                    Student
                  </TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                    Class
                  </TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider text-center">
                    Status
                  </TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                    Arrival Time
                  </TableHead>
                  <TableHead className="text-right font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider px-6">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAttendances.map((att) => (
                  <TableRow
                    key={att.id}
                    className="group border-slate-100 transition-colors hover:bg-slate-50/80"
                  >
                    <TableCell className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-md bg-[#0A0E2E] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">
                          {att.student.firstName[0]}{att.student.lastName[0]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#0A0E2E]">
                            {att.student.firstName} {att.student.lastName}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400">ID: {att.student.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-bold text-[#0A0E2E]">
                        {formatClass(att.student.year, att.student.classGroup)}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      {att.status === 'REPORTED' ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                          <CheckCircle className="h-3 w-3" />
                          Reported
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700">
                          <Clock className="h-3 w-3" />
                          Not Reported
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-[#0A0E2E]/70">
                        <Clock className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold">{formatTime(att.arrivalTime)}</span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 text-right">
                      {att.status === 'NOT_REPORTED' ? (
                        <Button
                          onClick={() => markAttendance(att.student.id, 'REPORTED')}
                          size="sm"
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold"
                        >
                          <CheckCircle className="h-3.5 w-3.5 mr-1" />
                          Mark Reported
                        </Button>
                      ) : (
                        <Button
                          onClick={() => markAttendance(att.student.id, 'NOT_REPORTED')}
                          size="sm"
                          variant="outline"
                          className="border-slate-300 text-slate-600 hover:bg-slate-100 font-bold"
                        >
                          Undo
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}
