import { useState } from 'react';
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
import { Calendar, Plus, CheckCircle, X, AlertCircle, Edit2, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import { DeleteConfirmationModal } from '@/components/discipline/DeleteConfirmationModal';

interface TermSession {
  id: number;
  name: string;
  year: number;
  startDate: string;
  endDate: string;
  openingDate: string;
  isActive: boolean;
  status: 'UPCOMING' | 'ACTIVE' | 'COMPLETED';
}

export default function ManageTerms() {
  const queryClient = useQueryClient();
  const [showForm, setShowForm] = useState(false);
  const [editingTerm, setEditingTerm] = useState<TermSession | null>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [termToDelete, setTermToDelete] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: 'Term 1',
    year: new Date().getFullYear(),
    startDate: '',
    endDate: '',
    openingDate: '',
    status: 'UPCOMING' as 'UPCOMING' | 'ACTIVE' | 'COMPLETED',
  });

  const { data: terms = [], isLoading } = useQuery<TermSession[]>({
    queryKey: ['opening-term-sessions'],
    queryFn: () => apiFetch('/opening-attendance/term-sessions'),
    staleTime: 1000 * 60 * 5,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTerm) {
        // Update existing term
        await apiFetch(`/opening-attendance/term-sessions/${editingTerm.id}`, {
          method: 'PATCH',
          body: JSON.stringify(formData),
        });
        toast.success('Term session updated successfully');
      } else {
        // Create new term
        await apiFetch('/opening-attendance/term-sessions', {
          method: 'POST',
          body: JSON.stringify(formData),
        });
        toast.success('Term session created successfully');
      }
      setShowForm(false);
      setEditingTerm(null);
      setFormData({
        name: 'Term 1',
        year: new Date().getFullYear(),
        startDate: '',
        endDate: '',
        openingDate: '',
        status: 'UPCOMING',
      });
      queryClient.invalidateQueries({ queryKey: ['opening-term-sessions'] });
    } catch (error: any) {
      toast.error(error.message || `Failed to ${editingTerm ? 'update' : 'create'} term session`);
    }
  };

  const handleEdit = (term: TermSession) => {
    setEditingTerm(term);
    setFormData({
      name: term.name,
      year: term.year,
      startDate: term.startDate.split('T')[0],
      endDate: term.endDate.split('T')[0],
      openingDate: term.openingDate.split('T')[0],
      status: term.status,
    });
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setShowForm(false);
    setEditingTerm(null);
    setFormData({
      name: 'Term 1',
      year: new Date().getFullYear(),
      startDate: '',
      endDate: '',
      openingDate: '',
      status: 'UPCOMING',
    });
  };

  const handleActivate = async (id: number) => {
    try {
      await apiFetch(`/opening-attendance/term-sessions/${id}/activate`, {
        method: 'POST',
      });
      toast.success('Term activated successfully');
      queryClient.invalidateQueries({ queryKey: ['opening-term-sessions'] });
    } catch (error) {
      toast.error('Failed to activate term');
    }
  };

  const handleDelete = (id: number) => {
    setTermToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (termToDelete) {
      try {
        await apiFetch(`/opening-attendance/term-sessions/${termToDelete}`, {
          method: 'DELETE',
        });
        toast.success('Term deleted successfully');
        queryClient.invalidateQueries({ queryKey: ['opening-term-sessions'] });
      } catch (error: any) {
        toast.error(error.message || 'Failed to delete term');
      } finally {
        setDeleteModalOpen(false);
        setTermToDelete(null);
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getAcademicYear = (termName: string, year: number) => {
    if (termName === 'Term 1') {
      return `${year}-${year + 1}`;
    }
    return `${year - 1}-${year}`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-emerald-100 text-emerald-700';
      case 'COMPLETED':
        return 'bg-slate-100 text-slate-700';
      case 'UPCOMING':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-[#0A0E2E]">
      <AppHeader title="Manage Term Sessions" subtitle="Create and manage academic terms" />

      <div className="mx-auto max-w-7xl px-6 py-8 animate-in fade-in duration-700">
        {/* Header Section */}
        <div className="mb-6 rounded-md border border-[#0A0E2E]/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold text-[#0A0E2E]">
                <Calendar className="h-6 w-6" />
                Academic Term Sessions
                <span className="rounded-full bg-[#0A0E2E] px-3 py-0.5 text-xs font-medium text-white">
                  {terms.length} TERMS
                </span>
              </h2>
              <p className="mt-1 text-sm font-medium text-[#0A0E2E]/60">
                Create and manage terms for each academic year manually
              </p>
            </div>
            <Button
              onClick={() => setShowForm(!showForm)}
              className="rounded-md bg-[#0A0E2E] text-white shadow-lg shadow-[#0A0E2E]/20 hover:bg-[#1a264a] font-bold"
            >
              {showForm ? (
                <>
                  <X className="h-4 w-4 mr-2" /> Cancel
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" /> New Term
                </>
              )}
            </Button>
          </div>

          {/* Create/Edit Form */}
          {showForm && (
            <div className="border-t border-[#0A0E2E]/10 pt-6">
              <h3 className="text-lg font-bold text-[#0A0E2E] mb-4">
                {editingTerm ? 'Edit Term Session' : 'Create New Term Session'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0A0E2E]/70 uppercase tracking-wider mb-2">
                      Term Name
                    </label>
                    <select
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                      required
                    >
                      <option value="Term 1">Term 1</option>
                      <option value="Term 2">Term 2</option>
                      <option value="Term 3">Term 3</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A0E2E]/70 uppercase tracking-wider mb-2">
                      Year
                    </label>
                    <input
                      type="number"
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                      className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                      required
                      min="2020"
                      max="2050"
                    />
                    <p className="text-[10px] text-[#0A0E2E]/50 mt-1">
                      Academic Year: {getAcademicYear(formData.name, formData.year)}
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A0E2E]/70 uppercase tracking-wider mb-2">
                      Opening Day
                    </label>
                    <input
                      type="date"
                      value={formData.openingDate}
                      onChange={(e) => setFormData({ ...formData, openingDate: e.target.value })}
                      className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A0E2E]/70 uppercase tracking-wider mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A0E2E]/70 uppercase tracking-wider mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A0E2E]/70 uppercase tracking-wider mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                      className="w-full rounded-md border border-[#0A0E2E]/10 bg-slate-50/50 px-4 py-2.5 text-sm font-medium outline-none transition-all focus:ring-2 focus:ring-[#0A0E2E]/10 focus:bg-white"
                      required
                    >
                      <option value="UPCOMING">Upcoming</option>
                      <option value="ACTIVE">Active</option>
                      <option value="COMPLETED">Completed</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    className="bg-[#0A0E2E] text-white font-bold hover:bg-[#1a264a]"
                  >
                    <Plus className="h-4 w-4 mr-2" /> {editingTerm ? 'Update Term' : 'Create Term'}
                  </Button>
                  <Button
                    type="button"
                    onClick={handleCancelEdit}
                    variant="outline"
                    className="border-[#0A0E2E]/20 text-[#0A0E2E] font-bold hover:bg-slate-50"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Terms Table */}
        <div className="overflow-hidden rounded-md border border-[#0A0E2E]/10 bg-white shadow-xl shadow-[#0A0E2E]/5">
          {isLoading ? (
            <div className="p-20 text-center space-y-4">
              <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#0A0E2E] border-t-transparent" />
              <p className="animate-pulse font-medium text-[#0A0E2E]/60 text-sm">Loading Terms...</p>
            </div>
          ) : terms.length === 0 ? (
            <div className="py-12">
              <EmptyState
                icon={Calendar}
                title="No Term Sessions"
                description="Click 'New Term' to create your first academic term."
              />
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-[#0A0E2E]/5">
                <TableRow className="hover:bg-transparent border-slate-100">
                  <TableHead className="px-6 py-5 font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                    Term
                  </TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                    Academic Year
                  </TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                    Opening Day
                  </TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider">
                    Period
                  </TableHead>
                  <TableHead className="font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider text-center">
                    Status
                  </TableHead>
                  <TableHead className="text-right font-bold text-[#0A0E2E]/70 text-xs uppercase tracking-wider px-6">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {terms.map((term) => (
                  <TableRow key={term.id} className="group border-slate-100 transition-colors hover:bg-slate-50/80">
                    <TableCell className="py-5 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-md bg-[#0A0E2E] text-white flex items-center justify-center text-xs font-bold ring-2 ring-white shadow-sm">
                          {term.name.split(' ')[1]}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#0A0E2E]">
                            {term.name} {term.year}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400">ID: {term.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm font-bold text-[#0A0E2E]">
                        {getAcademicYear(term.name, term.year)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-xs font-bold text-[#0A0E2E]/70">{formatDate(term.openingDate)}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-xs font-bold text-[#0A0E2E]/70">
                        {formatDate(term.startDate)} - {formatDate(term.endDate)}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold ${getStatusColor(term.status)}`}>
                          {term.status === 'ACTIVE' && <CheckCircle className="h-3 w-3" />}
                          {term.status}
                        </span>
                        {term.isActive && (
                          <span className="text-[10px] font-bold text-emerald-600">
                            Currently Active
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="px-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEdit(term)}
                          className="p-2 rounded-md transition-all hover:bg-blue-50 text-blue-400 hover:text-blue-600"
                          title="Edit Term"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        {!term.isActive && term.status !== 'COMPLETED' && (
                          <Button
                            onClick={() => handleActivate(term.id)}
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                          >
                            Set Active
                          </Button>
                        )}
                        {!term.isActive && (
                          <button
                            onClick={() => handleDelete(term.id)}
                            className="p-2 rounded-md transition-all hover:bg-red-50 text-red-300 hover:text-red-500"
                            title="Delete Term"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-6 rounded-md border border-blue-200 bg-blue-50/50 p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-blue-900 mb-2">💡 How to Use Term Sessions</h4>
              <ul className="text-xs text-blue-800 space-y-1 list-disc list-inside">
                <li>Create terms manually for each academic year as needed (e.g., when 2028-2029 starts)</li>
                <li>Academic year spans two calendar years: Term 1 2026 = 2026-2027 academic year</li>
                <li>Only one term can be active at a time - activate the current term</li>
                <li>After creating terms, use "Opening Attendance" page to track student arrivals</li>
                <li>Each term maintains separate attendance records</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <DeleteConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setTermToDelete(null);
        }}
        onConfirm={confirmDelete}
        title="Delete Term Session"
        description="Are you sure you want to delete this term? All attendance records for this term will also be deleted. This action cannot be undone."
      />
    </div>
  );
}
