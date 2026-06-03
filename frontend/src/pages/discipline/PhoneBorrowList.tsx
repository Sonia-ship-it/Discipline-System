import { useState } from 'react';
import { AppHeader } from '@/components/layout/AppHeader';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/RCA/Badges';
import { EmptyState } from '@/components/RCA/EmptyState';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Search, Plus, Trash2, Smartphone, Calendar, User, CheckCircle, Clock, Download, Phone } from 'lucide-react';
import { toast } from 'sonner';
import { PhoneBorrowModal } from '@/components/discipline/PhoneBorrowModal';
import { DeleteConfirmationModal } from '@/components/discipline/DeleteConfirmationModal';
import { exportToExcel, exportToPDF } from '@/lib/exportUtils';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';

interface PhoneBorrowRecord {
    id: number;
    studentId: number;
    phoneModel: string;
    borrowedAt: string;
    returnedAt: string | null;
    status: string;
    student?: {
        firstName: string;
        lastName: string;
    };
}

export default function PhoneBorrowList() {
    const queryClient = useQueryClient();
    const [search, setSearch] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [recordToDelete, setRecordToDelete] = useState<number | null>(null);

    const { data: records = [], isLoading: loading } = useQuery<PhoneBorrowRecord[]>({
        queryKey: ['phone-borrows'],
        queryFn: () => apiFetch('/phone-borrows'),
        staleTime: 1000 * 60 * 2,
    });

    const loadRecords = () => queryClient.invalidateQueries({ queryKey: ['phone-borrows'] });

    const handleMarkReturned = async (id: number) => {
        try {
            await apiFetch(`/phone-borrows/${id}/return`, { method: 'PATCH' });
            toast.success('Phone marked as returned');
            loadRecords();
        } catch (error) {
            toast.error('Failed to mark as returned');
        }
    };

    const handleDelete = (id: number) => {
        setRecordToDelete(id);
        setDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (recordToDelete) {
            try {
                await apiFetch(`/phone-borrows/${recordToDelete}`, { method: 'DELETE' });
                toast.success('Record deleted');
                loadRecords();
            } catch (error) {
                toast.error('Failed to delete record');
            } finally {
                setDeleteModalOpen(false);
                setRecordToDelete(null);
            }
        }
    };

    const formatDateTime = (dateString: string) => {
        return new Date(dateString).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const filteredRecords = records.filter(r => {
        const studentName = r.student ? `${r.student.firstName} ${r.student.lastName}` : '';
        return studentName.toLowerCase().includes(search.toLowerCase()) ||
            r.studentId.toString().includes(search);
    });

    const borrowedCount = records.filter(r => r.status === 'BORROWED').length;

    const exportColumns = [
        { header: 'Student Name', key: 'studentName' },
        { header: 'Student ID', key: 'studentId' },
        { header: 'Phone Model', key: 'phoneModel' },
        { header: 'Borrowed At', key: 'borrowedAt' },
        { header: 'Returned At', key: 'returnedAt' },
        { header: 'Status', key: 'status' },
    ];

    const exportData = filteredRecords.map(r => ({
        studentName: r.student ? `${r.student.firstName} ${r.student.lastName}` : 'Unknown',
        studentId: r.studentId,
        phoneModel: r.phoneModel,
        borrowedAt: formatDateTime(r.borrowedAt),
        returnedAt: r.returnedAt ? formatDateTime(r.returnedAt) : 'Not Returned',
        status: r.status,
    }));

    return (
        <div className="min-h-screen bg-slate-50/50 text-[#0A0E2E]">
            <AppHeader title="Phone Borrow Records" subtitle="Track Student Phone Usage" />

            <div className="mx-auto max-w-7xl px-6 py-8 animate-in fade-in duration-700">
                <div className="mb-6 rounded-md border border-[#0A0E2E]/10 bg-white p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                        <div>
                            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0A0E2E]">
                                Phone Borrowing
                                <span className="rounded-full bg-[#0A0E2E] px-3 py-0.5 text-xs font-medium text-white">
                                    {borrowedCount} ACTIVE
                                </span>
                            </h2>
                            <p className="mt-1 text-sm font-medium text-[#0A0E2E]/60">
                                Monitor and manage student phone borrowing records.
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="inline-flex items-center gap-2 rounded-md border border-[#0A0E2E]/20 bg-white px-4 py-2">
                                <Smartphone className="h-4 w-4 text-[#0A0E2E]" />
                                <span className="text-[11px] font-bold text-[#0A0E2E]">Tracked & Recorded</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0A0E2E]/40" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search by student name or ID..."
                                className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 py-2.5 pl-10 pr-4 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                            />
                        </div>
                        <div className="flex items-center gap-1 border border-[#0A0E2E]/15 rounded-md overflow-hidden">
                            <button
                                onClick={() => exportToPDF(exportData, exportColumns, 'phone_borrow_records', 'RCA — Phone Borrow Records')}
                                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#0A0E2E] hover:bg-[#0A0E2E] hover:text-white transition-all"
                            >
                                <Download className="h-3.5 w-3.5" /> PDF
                            </button>
                            <div className="w-px h-6 bg-[#0A0E2E]/15" />
                            <button
                                onClick={() => exportToExcel(exportData, exportColumns, 'phone_borrow_records')}
                                className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#0A0E2E] hover:bg-[#0A0E2E] hover:text-white transition-all"
                            >
                                <Download className="h-3.5 w-3.5" /> Excel
                            </button>
                        </div>
                        <Button
                            onClick={() => setModalOpen(true)}
                            className="rounded-md bg-[#0A0E2E] text-white shadow-lg shadow-[#0A0E2E]/20 hover:bg-[#1a264a] font-bold"
                        >
                            <Plus className="h-4 w-4 mr-2" /> New Record
                        </Button>
                    </div>
                </div>

                <div className="overflow-hidden rounded-md border border-[#0A0E2E]/10 bg-white shadow-xl shadow-[#0A0E2E]/5">
                    {loading ? (
                        <div className="p-20 text-center space-y-4">
                            <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0A0E2E] border-t-transparent" />
                            <p className="animate-pulse font-medium text-[#0A0E2E]/60 text-sm">Loading Records...</p>
                        </div>
                    ) : filteredRecords.length === 0 ? (
                        <div className="py-12">
                            <EmptyState
                                icon={Smartphone}
                                title="No Phone Borrow Records"
                                description="Start tracking student phone usage by creating a new record."
                            />
                        </div>
                    ) : (
                        <Table>
                            <TableHeader className="bg-[#0A0E2E]/5">
                                <TableRow className="hover:bg-transparent border-slate-100">
                                    <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Student</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Phone Model</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Borrowed At</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">Returned At</TableHead>
                                    <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider text-center">Status</TableHead>
                                    <TableHead className="text-right font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider px-6">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredRecords.map((record) => (
                                    <TableRow key={record.id} className="group border-slate-100 transition-colors hover:bg-slate-50/80">
                                        <TableCell className="py-5 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-9 rounded-md bg-[#0A0E2E] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">
                                                    {record.student ? `${record.student.firstName[0]}${record.student.lastName[0]}` : 'NA'}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[#0A0E2E]">
                                                        {record.student ? `${record.student.firstName} ${record.student.lastName}` : 'Unknown'}
                                                    </p>
                                                    <p className="text-[10px] font-bold text-slate-400">ID: {record.studentId}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Phone className="h-3.5 w-3.5 text-slate-400" />
                                                <span className="text-sm font-bold text-[#0A0E2E]">{record.phoneModel}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2 text-[#0A0E2E]/70">
                                                <Calendar className="h-3.5 w-3.5" />
                                                <span className="text-xs font-bold">{formatDateTime(record.borrowedAt)}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {record.returnedAt ? (
                                                <div className="flex items-center gap-2 text-emerald-600">
                                                    <CheckCircle className="h-3.5 w-3.5" />
                                                    <span className="text-xs font-bold">{formatDateTime(record.returnedAt)}</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2 text-amber-600">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    <span className="text-xs font-bold italic">Not Returned</span>
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <StatusBadge status={record.status} />
                                        </TableCell>
                                        <TableCell className="px-6 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                {record.status === 'BORROWED' && (
                                                    <button
                                                        onClick={() => handleMarkReturned(record.id)}
                                                        className="p-2 rounded-md transition-all hover:bg-emerald-50 text-emerald-400 hover:text-emerald-600"
                                                        title="Mark as Returned"
                                                    >
                                                        <CheckCircle className="h-4 w-4" />
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleDelete(record.id)}
                                                    className="p-2 rounded-md transition-all hover:bg-red-50 text-red-300 hover:text-red-500"
                                                    title="Delete Record"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </div>
            </div>

            <PhoneBorrowModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSuccess={loadRecords}
            />

            <DeleteConfirmationModal
                isOpen={deleteModalOpen}
                onClose={() => {
                    setDeleteModalOpen(false);
                    setRecordToDelete(null);
                }}
                onConfirm={confirmDelete}
                title="Delete Phone Borrow Record"
                description="Are you sure you want to delete this phone borrow record? This action cannot be undone."
            />
        </div>
    );
}
