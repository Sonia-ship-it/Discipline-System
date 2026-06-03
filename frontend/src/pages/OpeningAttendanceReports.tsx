import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
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
import { BarChart3, Download, FileText, Users, CheckCircle, Clock } from 'lucide-react';

interface TermSession {
  id: number;
  name: string;
  year: number;
  isActive: boolean;
}

interface OpeningDayRecord {
  id: number;
  status: 'REPORTED' | 'NOT_REPORTED';
  arrivalTime: string | null;
  student: {
    firstName: string;
    lastName: string;
    year: string;
    classGroup: string;
  };
}

interface ClassReport {
  classGroup: string;
  expected: number;
  reported: number;
  missing: number;
}

export default function OpeningAttendanceReports() {
  const [selectedTerm, setSelectedTerm] = useState<TermSession | null>(null);
  const [activeReport, setActiveReport] = useState<'opening-day' | 'class-reporting'>('opening-day');

  const { data: terms = [] } = useQuery<TermSession[]>({
    queryKey: ['opening-term-sessions'],
    queryFn: () => apiFetch('/opening-attendance/term-sessions'),
    staleTime: 1000 * 60 * 5,
  });

  const { data: openingDayData = [], isLoading: loadingOpeningDay } = useQuery<OpeningDayRecord[]>({
    queryKey: ['opening-day-report', selectedTerm?.id],
    queryFn: () => apiFetch(`/opening-attendance/terms/${selectedTerm?.id}/reports/opening-day`),
    enabled: !!selectedTerm?.id && activeReport === 'opening-day',
    staleTime: 1000 * 60 * 2,
  });

  const { data: classReportData = [], isLoading: loadingClassReport } = useQuery<ClassReport[]>({
    queryKey: ['class-report', selectedTerm?.id],
    queryFn: () => apiFetch(`/opening-attendance/terms/${selectedTerm?.id}/reports/class-reporting`),
    enabled: !!selectedTerm?.id && activeReport === 'class-reporting',
    staleTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    if (terms.length > 0 && !selectedTerm) {
      const active = terms.find((t) => t.isActive);
      if (active) setSelectedTerm(active);
    }
  }, [terms, selectedTerm]);

  const exportToCSV = () => {
    let csvContent = '';
    if (activeReport === 'opening-day') {
      csvContent = 'Student,Class,Status,Arrival Time\n';
      openingDayData.forEach((record) => {
        const fullClass = `Year ${record.student.year} ${record.student.classGroup}`;
        csvContent += `"${record.student.firstName} ${record.student.lastName}","${fullClass}","${record.status}","${record.arrivalTime ? new Date(record.arrivalTime).toLocaleString() : 'N/A'}"\n`;
      });
    } else {
      csvContent = 'Class,Expected,Reported,Missing,Rate\n';
      classReportData.forEach((record) => {
        const rate = ((record.reported / record.expected) * 100).toFixed(1);
        csvContent += `"${record.classGroup}",${record.expected},${record.reported},${record.missing},${rate}%\n`;
      });
    }

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeReport}-${selectedTerm?.name}-${selectedTerm?.year}.csv`;
    a.click();
  };

  const formatDateTime = (dateString: string | null) => {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatClass = (year: string, classGroup: string) => {
    return `Year ${year} ${classGroup}`;
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-[#0A0E2E]">
      <AppHeader title="Opening Attendance Reports" subtitle="Detailed Analytics & Exports" />

      <div className="mx-auto max-w-7xl px-6 py-8 animate-in fade-in duration-700">
        {/* Controls */}
        <div className="mb-6 rounded-md border border-[#0A0E2E]/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0A0E2E]">
                <BarChart3 className="h-6 w-6" />
                Attendance Reports
              </h2>
              <p className="mt-1 text-sm font-medium text-[#0A0E2E]/60">
                View and export comprehensive attendance reports.
              </p>
            </div>
            <Button
              onClick={exportToCSV}
              className="rounded-md bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 font-bold"
              disabled={!selectedTerm}
            >
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
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

            <div className="flex items-end gap-2">
              <Button
                onClick={() => setActiveReport('opening-day')}
                variant={activeReport === 'opening-day' ? 'default' : 'outline'}
                className={
                  activeReport === 'opening-day'
                    ? 'bg-[#0A0E2E] text-white font-bold'
                    : 'border-[#0A0E2E]/20 text-[#0A0E2E] font-bold hover:bg-[#0A0E2E] hover:text-white'
                }
              >
                <FileText className="h-4 w-4 mr-2" />
                Opening Day Report
              </Button>
              <Button
                onClick={() => setActiveReport('class-reporting')}
                variant={activeReport === 'class-reporting' ? 'default' : 'outline'}
                className={
                  activeReport === 'class-reporting'
                    ? 'bg-[#0A0E2E] text-white font-bold'
                    : 'border-[#0A0E2E]/20 text-[#0A0E2E] font-bold hover:bg-[#0A0E2E] hover:text-white'
                }
              >
                <Users className="h-4 w-4 mr-2" />
                Class Report
              </Button>
            </div>
          </div>
        </div>

        {/* Reports */}
        <div className="overflow-hidden rounded-md border border-[#0A0E2E]/10 bg-white shadow-xl shadow-[#0A0E2E]/5">
          {activeReport === 'opening-day' && (
            <>
              <div className="p-6 bg-[#0A0E2E]/5 border-b border-[#0A0E2E]/10">
                <h3 className="text-lg font-bold text-[#0A0E2E]">Opening Day Report</h3>
                <p className="text-xs font-medium text-[#0A0E2E]/60">
                  Individual student attendance records with arrival times
                </p>
              </div>
              {loadingOpeningDay ? (
                <div className="p-20 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0A0E2E] border-t-transparent" />
                  <p className="animate-pulse font-medium text-[#0A0E2E]/60 text-sm">Loading Report...</p>
                </div>
              ) : openingDayData.length === 0 ? (
                <div className="py-12">
                  <EmptyState
                    icon={FileText}
                    title="No Data Available"
                    description="Select a term to view the opening day report."
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
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {openingDayData.map((record) => (
                      <TableRow key={record.id} className="border-slate-100 hover:bg-slate-50/80">
                        <TableCell className="py-4 px-6">
                          <p className="text-sm font-bold text-[#0A0E2E]">
                            {record.student.firstName} {record.student.lastName}
                          </p>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm font-bold text-[#0A0E2E]">
                            {formatClass(record.student.year, record.student.classGroup)}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          {record.status === 'REPORTED' ? (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                              <CheckCircle className="h-3 w-3" />
                              Reported
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700">
                              <Clock className="h-3 w-3" />
                              Not Reported
                            </span>
                          )}
                        </TableCell>
                        <TableCell>
                          <span className="text-xs font-bold text-[#0A0E2E]/70">
                            {formatDateTime(record.arrivalTime)}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </>
          )}

          {activeReport === 'class-reporting' && (
            <>
              <div className="p-6 bg-[#0A0E2E]/5 border-b border-[#0A0E2E]/10">
                <h3 className="text-lg font-bold text-[#0A0E2E]">Class Reporting Report</h3>
                <p className="text-xs font-medium text-[#0A0E2E]/60">
                  Attendance summary aggregated by class group
                </p>
              </div>
              {loadingClassReport ? (
                <div className="p-20 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0A0E2E] border-t-transparent" />
                  <p className="animate-pulse font-medium text-[#0A0E2E]/60 text-sm">Loading Report...</p>
                </div>
              ) : classReportData.length === 0 ? (
                <div className="py-12">
                  <EmptyState
                    icon={Users}
                    title="No Data Available"
                    description="Select a term to view the class reporting report."
                  />
                </div>
              ) : (
                <Table>
                  <TableHeader className="bg-[#0A0E2E]/5">
                    <TableRow className="hover:bg-transparent border-slate-100">
                      <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                        Class
                      </TableHead>
                      <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                        Expected
                      </TableHead>
                      <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                        Reported
                      </TableHead>
                      <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                        Missing
                      </TableHead>
                      <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                        Rate
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {classReportData.map((record) => {
                      const rate = ((record.reported / record.expected) * 100).toFixed(1);
                      return (
                        <TableRow key={record.classGroup} className="border-slate-100 hover:bg-slate-50/80">
                          <TableCell className="py-4 px-6">
                            <span className="text-sm font-bold text-[#0A0E2E]">{record.classGroup}</span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-bold text-[#0A0E2E]">{record.expected}</span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-bold text-emerald-600">{record.reported}</span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-bold text-red-600">{record.missing}</span>
                          </TableCell>
                          <TableCell>
                            <span className="text-sm font-bold text-blue-600">{rate}%</span>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
