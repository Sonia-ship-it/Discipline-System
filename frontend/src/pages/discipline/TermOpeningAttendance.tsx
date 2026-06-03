import { useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { StatusBadge } from '@/components/RCA/Badges';
import { EmptyState } from '@/components/RCA/EmptyState';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Search,
    Download,
    CalendarCheck,
    Users,
    UserCheck,
    UserX,
    Percent,
    CheckCircle,
    Undo2,
    BarChart3,
    ClipboardList,
} from 'lucide-react';
import { toast } from 'sonner';
import { exportToExcel, exportToPDF } from '@/lib/exportUtils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';

interface TermSession {
    id: number;
    name: string;
    year: number;
    openingDate: string;
    isActive: boolean;
}

interface AttendanceRecord {
    id: number;
    status: 'REPORTED' | 'NOT_REPORTED';
    arrivalTime: string | null;
    student: {
        id: number;
        firstName: string;
        lastName: string;
        classGroup: string;
    };
    recordedBy?: {
        firstName: string;
        lastName: string;
    } | null;
}

interface DashboardStats {
    total: number;
    reported: number;
    notReported: number;
    percentage: number;
}

interface ClassReportRow {
    class: string;
    expected: number;
    reported: number;
    missing: number;
}

type Tab = 'checkin' | 'opening-report' | 'class-report';
type StatusFilter = 'ALL' | 'REPORTED' | 'NOT_REPORTED';

export default function TermOpeningAttendance() {
    const queryClient = useQueryClient();
    const [selectedTermId, setSelectedTermId] = useState<number | null>(null);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<StatusFilter>('ALL');
    const [activeTab, setActiveTab] = useState<Tab>('checkin');
    const [markingId, setMarkingId] = useState<number | null>(null);

    const { data: sessions = [], isLoading: sessionsLoading } = useQuery<TermSession[]>({
        queryKey: ['term-sessions'],
        queryFn: async () => {
            await apiFetch('/term-attendance/sessions/ensure-current');
            return apiFetch('/term-attendance/sessions');
        },
        staleTime: 1000 * 60 * 5,
    });

    const activeTermId =
        selectedTermId ??
        sessions.find((s) => s.isActive)?.id ??
        sessions[0]?.id ??
        null;

    const selectedSession = sessions.find((s) => s.id === activeTermId);

    const { data: attendances = [], isLoading: attendancesLoading } = useQuery<AttendanceRecord[]>({
        queryKey: ['term-attendances', activeTermId],
        queryFn: () => apiFetch(`/term-attendance/sessions/${activeTermId}/attendances`),
        enabled: !!activeTermId,
        staleTime: 1000 * 30,
    });

    const { data: dashboard } = useQuery<DashboardStats>({
        queryKey: ['term-dashboard', activeTermId],
        queryFn: () => apiFetch(`/term-attendance/sessions/${activeTermId}/dashboard`),
        enabled: !!activeTermId,
        staleTime: 1000 * 30,
    });

    const { data: classReport = [] } = useQuery<ClassReportRow[]>({
        queryKey: ['term-class-report', activeTermId],
        queryFn: () => apiFetch(`/term-attendance/sessions/${activeTermId}/class-report`),
        enabled: !!activeTermId && activeTab === 'class-report',
        staleTime: 1000 * 60,
    });

    const refreshAll = () => {
        queryClient.invalidateQueries({ queryKey: ['term-attendances', activeTermId] });
        queryClient.invalidateQueries({ queryKey: ['term-dashboard', activeTermId] });
        queryClient.invalidateQueries({ queryKey: ['term-class-report', activeTermId] });
    };

    const handleMark = async (studentId: number, status: 'REPORTED' | 'NOT_REPORTED') => {
        if (!activeTermId) return;
        setMarkingId(studentId);
        try {
            await apiFetch(`/term-attendance/sessions/${activeTermId}/mark`, {
                method: 'POST',
                body: JSON.stringify({ studentId, status }),
            });
            toast.success(
                status === 'REPORTED'
                    ? 'Student marked as reported — parent SMS sent'
                    : 'Student marked as not yet reported',
            );
            refreshAll();
        } catch {
            toast.error('Failed to update attendance');
        } finally {
            setMarkingId(null);
        }
    };

    const formatTime = (dateString: string | null) => {
        if (!dateString) return '—';
        return new Date(dateString).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return '—';
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        });
    };

    const statusLabel = (status: string) =>
        status === 'REPORTED' ? 'Reported' : 'Not Yet Reported';

    const filteredAttendances = attendances.filter((a) => {
        const name = `${a.student.firstName} ${a.student.lastName}`.toLowerCase();
        const matchesSearch =
            name.includes(search.toLowerCase()) ||
            a.student.classGroup.toLowerCase().includes(search.toLowerCase());
        const matchesStatus = statusFilter === 'ALL' || a.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const openingReportColumns = [
        { header: 'Student', key: 'student' },
        { header: 'Class', key: 'class' },
        { header: 'Status', key: 'status' },
        { header: 'Arrival Time', key: 'arrivalTime' },
    ];

    const openingReportData = attendances.map((a) => ({
        student: `${a.student.firstName} ${a.student.lastName}`,
        class: a.student.classGroup,
        status: statusLabel(a.status),
        arrivalTime: formatTime(a.arrivalTime),
    }));

    const classReportColumns = [
        { header: 'Class', key: 'class' },
        { header: 'Expected', key: 'expected' },
        { header: 'Reported', key: 'reported' },
        { header: 'Missing', key: 'missing' },
    ];

    const classReportData = classReport.map((row) => ({
        class: row.class,
        expected: row.expected,
        reported: row.reported,
        missing: row.missing,
    }));

    const loading = sessionsLoading || attendancesLoading;

    return (
        <div className="min-h-screen bg-slate-50/50 text-[#0A0E2E]">
            <AppHeader
                title="School Opening Attendance"
                subtitle="Track student return-to-school reporting each term"
            />

            <div className="mx-auto max-w-7xl px-6 py-8 animate-in fade-in duration-700">
                <div className="mb-6 rounded-md border border-[#0A0E2E]/10 bg-white p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0A0E2E]">
                                Opening Day Attendance
                                {selectedSession && (
                                    <span className="rounded-full bg-[#0A0E2E] px-3 py-0.5 text-xs font-medium text-white">
                                        {selectedSession.name} {selectedSession.year}
                                    </span>
                                )}
                            </h2>
                            <p className="mt-1 text-sm font-medium text-[#0A0E2E]/60">
                                Mark students as reported and notify parents automatically.
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="text-xs font-bold text-[#0A0E2E]/60 uppercase tracking-wider">
                                Term
                            </label>
                            <select
                                value={activeTermId ?? ''}
                                onChange={(e) => setSelectedTermId(Number(e.target.value))}
                                className="rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-bold outline-none focus:ring-2 focus:ring-[#0A0E2E]/10"
                            >
                                {sessions.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.name} {s.year}
                                        {s.isActive ? ' (Current)' : ''}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {dashboard && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                            <div className="rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 p-4">
                                <div className="flex items-center gap-2 text-[#0A0E2E]/60 mb-1">
                                    <Users className="h-4 w-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Expected</span>
                                </div>
                                <p className="text-2xl font-bold text-[#0A0E2E]">{dashboard.total}</p>
                            </div>
                            <div className="rounded-md border border-emerald-100 bg-emerald-50/50 p-4">
                                <div className="flex items-center gap-2 text-emerald-700/70 mb-1">
                                    <UserCheck className="h-4 w-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Reported</span>
                                </div>
                                <p className="text-2xl font-bold text-emerald-700">{dashboard.reported}</p>
                            </div>
                            <div className="rounded-md border border-amber-100 bg-amber-50/50 p-4">
                                <div className="flex items-center gap-2 text-amber-700/70 mb-1">
                                    <UserX className="h-4 w-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Not Reported</span>
                                </div>
                                <p className="text-2xl font-bold text-amber-700">{dashboard.notReported}</p>
                            </div>
                            <div className="rounded-md border border-indigo-100 bg-indigo-50/50 p-4">
                                <div className="flex items-center gap-2 text-indigo-700/70 mb-1">
                                    <Percent className="h-4 w-4" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">Reporting Rate</span>
                                </div>
                                <p className="text-2xl font-bold text-indigo-700">{dashboard.percentage}%</p>
                            </div>
                        </div>
                    )}

                    <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-md w-fit mb-6">
                        {([
                            { id: 'checkin' as Tab, label: 'Check-In', icon: ClipboardList },
                            { id: 'opening-report' as Tab, label: 'Opening Day Report', icon: CalendarCheck },
                            { id: 'class-report' as Tab, label: 'Class Report', icon: BarChart3 },
                        ]).map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${
                                    activeTab === id
                                        ? 'bg-[#0A0E2E] text-white shadow-md'
                                        : 'text-[#0A0E2E]/60 hover:text-[#0A0E2E]'
                                }`}
                            >
                                <div className="flex items-center gap-2">
                                    <Icon className="w-3.5 h-3.5" /> {label}
                                </div>
                            </button>
                        ))}
                    </div>

                    {activeTab === 'checkin' && (
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A0E2E]/40" />
                                <input
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search by student name or class..."
                                    className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                {(['ALL', 'REPORTED', 'NOT_REPORTED'] as StatusFilter[]).map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setStatusFilter(f)}
                                        className={`px-3 py-2 text-xs font-bold rounded-md border transition-all ${
                                            statusFilter === f
                                                ? 'bg-[#0A0E2E] text-white border-[#0A0E2E]'
                                                : 'border-[#0A0E2E]/15 text-[#0A0E2E]/60 hover:text-[#0A0E2E]'
                                        }`}
                                    >
                                        {f === 'ALL' ? 'All' : f === 'REPORTED' ? 'Reported' : 'Not Yet Reported'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab !== 'checkin' && (
                        <div className="flex justify-end">
                            <div className="flex items-center gap-1 border border-[#0A0E2E]/15 rounded-md overflow-hidden">
                                <button
                                    onClick={() =>
                                        exportToPDF(
                                            activeTab === 'opening-report' ? openingReportData : classReportData,
                                            activeTab === 'opening-report' ? openingReportColumns : classReportColumns,
                                            activeTab === 'opening-report' ? 'opening_day_report' : 'class_reporting_report',
                                            activeTab === 'opening-report'
                                                ? 'RCA — Opening Day Report'
                                                : 'RCA — Class Reporting Report',
                                        )
                                    }
                                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#0A0E2E] hover:bg-[#0A0E2E] hover:text-white transition-all"
                                >
                                    <Download className="h-3.5 w-3.5" /> PDF
                                </button>
                                <div className="w-px h-6 bg-[#0A0E2E]/15" />
                                <button
                                    onClick={() =>
                                        exportToExcel(
                                            activeTab === 'opening-report' ? openingReportData : classReportData,
                                            activeTab === 'opening-report' ? openingReportColumns : classReportColumns,
                                            activeTab === 'opening-report' ? 'opening_day_report' : 'class_reporting_report',
                                        )
                                    }
                                    className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#0A0E2E] hover:bg-[#0A0E2E] hover:text-white transition-all"
                                >
                                    <Download className="h-3.5 w-3.5" /> Excel
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="overflow-hidden rounded-md border border-[#0A0E2E]/10 bg-white shadow-xl shadow-[#0A0E2E]/5">
                    {loading ? (
                        <div className="p-20 text-center space-y-4">
                            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0A0E2E] border-t-transparent" />
                            <p className="animate-pulse font-medium text-[#0A0E2E]/60 text-sm">Loading attendance...</p>
                        </div>
                    ) : activeTab === 'checkin' ? (
                        filteredAttendances.length === 0 ? (
                            <div className="py-12">
                                <EmptyState
                                    icon={CalendarCheck}
                                    title="No Students Found"
                                    description="No students match your search or filter criteria."
                                />
                            </div>
                        ) : (
                            <Table>
                                <TableHeader className="bg-[#0A0E2E]/5">
                                    <TableRow className="hover:bg-transparent border-slate-100">
                                        <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Student</TableHead>
                                        <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Class</TableHead>
                                        <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Status</TableHead>
                                        <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Date</TableHead>
                                        <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Arrival Time</TableHead>
                                        <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Recorded By</TableHead>
                                        <TableHead className="text-right font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider px-6">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredAttendances.map((record) => (
                                        <TableRow key={record.id} className="group border-slate-100 transition-colors hover:bg-slate-50/80">
                                            <TableCell className="py-5 px-6">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-9 w-9 rounded-md bg-[#0A0E2E] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">
                                                        {record.student.firstName[0]}
                                                        {record.student.lastName[0]}
                                                    </div>
                                                    <p className="text-sm font-bold text-[#0A0E2E]">
                                                        {record.student.firstName} {record.student.lastName}
                                                    </p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-sm font-bold text-[#0A0E2E]">{record.student.classGroup}</span>
                                            </TableCell>
                                            <TableCell>
                                                <StatusBadge status={record.status === 'REPORTED' ? 'REPORTED' : 'NOT_REPORTED'} />
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-xs font-bold text-[#0A0E2E]/70">{formatDate(record.arrivalTime)}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-xs font-bold text-[#0A0E2E]">{formatTime(record.arrivalTime)}</span>
                                            </TableCell>
                                            <TableCell>
                                                <span className="text-xs font-bold text-[#0A0E2E]/60">
                                                    {record.recordedBy
                                                        ? `${record.recordedBy.firstName} ${record.recordedBy.lastName}`
                                                        : '—'}
                                                </span>
                                            </TableCell>
                                            <TableCell className="px-6 text-right">
                                                <div className="flex items-center justify-end gap-2">
                                                    {record.status !== 'REPORTED' ? (
                                                        <Button
                                                            size="sm"
                                                            disabled={markingId === record.student.id}
                                                            onClick={() => handleMark(record.student.id, 'REPORTED')}
                                                            className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold h-8"
                                                        >
                                                            <CheckCircle className="h-3.5 w-3.5 mr-1" />
                                                            Mark Reported
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            disabled={markingId === record.student.id}
                                                            onClick={() => handleMark(record.student.id, 'NOT_REPORTED')}
                                                            className="rounded-md text-xs font-bold h-8 border-[#0A0E2E]/15"
                                                        >
                                                            <Undo2 className="h-3.5 w-3.5 mr-1" />
                                                            Undo
                                                        </Button>
                                                    )}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )
                    ) : activeTab === 'opening-report' ? (
                        <Table>
                            <TableHeader className="bg-[#0A0E2E]/5">
                                <TableRow className="hover:bg-transparent border-slate-100">
                                    <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Student</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Class</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Status</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Arrival Time</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {attendances.map((record) => (
                                    <TableRow key={record.id} className="border-slate-100 hover:bg-slate-50/80">
                                        <TableCell className="px-6 py-4 text-sm font-bold">
                                            {record.student.firstName} {record.student.lastName}
                                        </TableCell>
                                        <TableCell className="text-sm font-bold">{record.student.classGroup}</TableCell>
                                        <TableCell>
                                            <StatusBadge status={record.status === 'REPORTED' ? 'REPORTED' : 'NOT_REPORTED'} />
                                        </TableCell>
                                        <TableCell className="text-sm font-bold">{formatTime(record.arrivalTime)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <Table>
                            <TableHeader className="bg-[#0A0E2E]/5">
                                <TableRow className="hover:bg-transparent border-slate-100">
                                    <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Class</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Expected</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Reported</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Missing</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {classReport.map((row) => (
                                    <TableRow key={row.class} className="border-slate-100 hover:bg-slate-50/80">
                                        <TableCell className="px-6 py-4 text-sm font-bold">{row.class}</TableCell>
                                        <TableCell className="text-sm font-bold">{row.expected}</TableCell>
                                        <TableCell className="text-sm font-bold text-emerald-700">{row.reported}</TableCell>
                                        <TableCell className="text-sm font-bold text-amber-700">{row.missing}</TableCell>
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
