import { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { apiFetch } from '@/lib/api';
import { toast } from 'sonner';
import { Smartphone, User, Loader2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface PhoneBorrowModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export function PhoneBorrowModal({ isOpen, onClose, onSuccess }: PhoneBorrowModalProps) {
    const [loading, setLoading] = useState(false);
    const [selectedStudentId, setSelectedStudentId] = useState('');

    const { data: students = [], isLoading: loadingStudents } = useQuery<any[]>({
        queryKey: ['students'],
        queryFn: () => apiFetch('/students'),
        staleTime: 1000 * 60 * 5,
        enabled: isOpen,
    });

    useEffect(() => {
        if (!isOpen) {
            setSelectedStudentId('');
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await apiFetch('/phone-borrows', {
                method: 'POST',
                body: JSON.stringify({
                    studentId: Number(selectedStudentId),
                }),
            });

            toast.success('Mara Z borrowed successfully');
            onSuccess();
            onClose();
        } catch (error: any) {
            console.error('Phone Borrow Error:', error);
            toast.error(error.message || 'Failed to create record');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md rounded-md border-none bg-white p-0 overflow-hidden shadow-2xl">
                <div className="bg-[#0A0E2E] p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <Smartphone className="h-6 w-6" />
                            Borrow Mara Z
                        </DialogTitle>
                        <p className="text-white/60 text-sm font-medium mt-1">
                            Record a student borrowing the Mara Z phone.
                        </p>
                    </DialogHeader>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div className="space-y-2">
                        <Label className="text-xs font-bold text-[#0A0E2E]/60 ml-1">Select Student</Label>
                        <div className="relative group">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0A0E2E]/30 group-focus-within:text-[#0A0E2E] transition-colors pointer-events-none z-10" />
                            <select
                                required
                                value={selectedStudentId}
                                onChange={(e) => setSelectedStudentId(e.target.value)}
                                disabled={loadingStudents}
                                className="w-full rounded-md pl-10 pr-4 border border-[#0A0E2E]/10 bg-slate-50 focus:bg-white h-12 text-sm font-bold outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%230A0E2E' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                            >
                                <option value="">
                                    {loadingStudents ? 'Loading students...' : 'Choose a student...'}
                                </option>
                                {students.map((student) => (
                                    <option key={student.id} value={student.id}>
                                        {student.firstName} {student.lastName} - ID: {student.id}
                                    </option>
                                ))}
                            </select>
                            {loadingStudents && (
                                <Loader2 className="absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0A0E2E]/40 animate-spin" />
                            )}
                        </div>
                        {!loadingStudents && students.length === 0 && (
                            <p className="text-xs text-red-500 ml-1">No students found. Please add students first.</p>
                        )}
                    </div>

                    <div className="rounded-md bg-blue-50 border border-blue-100 p-4">
                        <div className="flex items-start gap-3">
                            <Smartphone className="h-5 w-5 text-blue-600 mt-0.5" />
                            <div>
                                <p className="text-sm font-bold text-blue-900">Phone: Mara Z</p>
                                <p className="text-xs text-blue-700 mt-1">This phone has no SIM card installed.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button
                            type="submit"
                            disabled={loading || loadingStudents || !selectedStudentId}
                            className="w-full h-12 rounded-md bg-[#0A0E2E] hover:bg-[#1a264a] text-white font-bold text-sm shadow-xl shadow-[#0A0E2E]/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Recording...
                                </span>
                            ) : 'Record Borrow'}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
