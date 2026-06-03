import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore, StaffRole } from '@/stores/authStore';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import { Button } from '@/components/ui/button';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import {
  Shield, Stethoscope, BookOpen, Settings,
  UserCheck, UserX, ArrowLeft, UserPlus, Search, LogOut, ChevronDown,
} from 'lucide-react';
import { toast } from 'sonner';
import { AddStaffModal } from '@/components/admin/AddStaffModal';

interface StaffMember {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: StaffRole;
  isActive: boolean;
  createdAt: string;
}

const ROLE_OPTIONS: { value: StaffRole; label: string; icon: React.ElementType; description: string }[] = [
  { value: 'ADMIN',      label: 'Admin',           icon: Settings,    description: 'Full admin portal access' },
  { value: 'DISCIPLINE', label: 'Discipline Staff', icon: Shield,      description: 'Full discipline system' },
  { value: 'NURSE',      label: 'Nurse',            icon: Stethoscope, description: 'Discipline records only' },
  { value: 'LIBRARIAN',  label: 'Librarian',        icon: BookOpen,    description: 'Library system only' },
];

function AdminHeader({ firstName, lastName }: { firstName: string; lastName: string }) {
  const router = useRouter();
  const { logout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const initials = `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase();

  return (
    <header className="bg-[#0A0E2E] h-16 flex items-center justify-between px-6 sticky top-0 z-30">
      <div>
        <h1 className="text-white font-bold text-xl leading-tight">Staff & Role Management</h1>
        <p className="text-white/60 text-xs font-medium mt-0.5">Admin Portal</p>
      </div>
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-white/10 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-white/15 border border-white/30 flex items-center justify-center">
            <span className="text-white text-xs font-bold">{initials}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-white/60" />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-[#0A0E2E] border border-white/10 rounded-md shadow-2xl py-1.5 z-50">
            <button
              onClick={() => { logout(); router.push('/login'); }}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default function UserManagement() {
  const router = useRouter();
  const { user, isAuthenticated, hydrated } = useAuthStore();
  const queryClient = useQueryClient();
  const [search, setSearch] = useState('');
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated) { router.push('/auth/login'); return; }
    if (user?.role !== 'ADMIN') { router.push('/discipline/dashboard'); }
  }, [hydrated, isAuthenticated, user, router]);

  const { data: staff = [], isLoading } = useQuery<StaffMember[]>({
    queryKey: ['admin', 'staff'],
    queryFn: () => apiFetch('/admin/staff'),
    enabled: user?.role === 'ADMIN',
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ['admin', 'staff'] });

  const handleRoleChange = async (staffId: number, role: StaffRole) => {
    setUpdatingId(staffId);
    try {
      await apiFetch(`/admin/staff/${staffId}/role`, {
        method: 'PATCH',
        body: JSON.stringify({ role }),
      });
      toast.success('Role updated successfully');
      invalidate();
    } catch (err: any) {
      toast.error(err.message || 'Failed to update role');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleToggleActive = async (staffId: number, isActive: boolean) => {
    setUpdatingId(staffId);
    try {
      await apiFetch(`/admin/staff/${staffId}/active`, {
        method: 'PATCH',
        body: JSON.stringify({ isActive }),
      });
      toast.success(isActive ? 'Account activated' : 'Account deactivated');
      invalidate();
    } catch (err: any) {
      toast.error(err.message || 'Failed to update account status');
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = staff.filter((s) => {
    const name = `${s.firstName} ${s.lastName} ${s.email}`.toLowerCase();
    return name.includes(search.toLowerCase());
  });

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#0A0E2E] border-t-transparent" />
      </div>
    );
  }

  if (!user || user.role !== 'ADMIN') return null;

  return (
    <div className="min-h-screen bg-white text-[#0A0E2E]">
      <AdminHeader firstName={user.firstName} lastName={user.lastName} />

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-6 animate-in fade-in duration-700">

        {/* Back + Add button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={() => router.push('/admin')}
            className="flex items-center gap-2 text-[#0A0E2E]/60 hover:text-[#0A0E2E] text-sm font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </button>
          <Button
            onClick={() => setAddModalOpen(true)}
            className="bg-[#0A0E2E] hover:bg-[#1a264a] text-white"
          >
            <UserPlus className="w-4 h-4 mr-2" /> Add Staff Member
          </Button>
        </div>

        {/* Role legend */}
        <div className="bg-white rounded-md border border-[#0A0E2E]/15 p-5 shadow-sm">
          <p className="text-xs font-bold uppercase text-[#0A0E2E]/50 mb-3">Role Access Levels</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ROLE_OPTIONS.map((r) => (
              <div key={r.value} className="flex items-start gap-3 p-3 rounded-md bg-[#0A0E2E]/5 border border-[#0A0E2E]/10">
                <r.icon className="w-4 h-4 mt-0.5 text-[#0A0E2E]/70 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#0A0E2E]">{r.label}</p>
                  <p className="text-xs text-[#0A0E2E]/50 mt-0.5 leading-snug">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0A0E2E]/40" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name or email..."
            className="w-full pl-11 pr-4 py-3 rounded-md border border-[#0A0E2E]/15 bg-white text-sm font-medium outline-none focus:ring-2 focus:ring-[#0A0E2E]/15"
          />
        </div>

        {/* Staff table */}
        <div className="bg-white rounded-md border border-[#0A0E2E]/15 shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="p-12 text-center text-sm text-[#0A0E2E]/50">Loading staff...</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-sm text-[#0A0E2E]/50">No staff members found</div>
          ) : (
            <table className="w-full">
              <thead className="border-b border-[#0A0E2E]/10 bg-[#0A0E2E]/5">
                <tr>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase text-[#0A0E2E]/60">Staff Member</th>
                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-[#0A0E2E]/60">Phone</th>
                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-[#0A0E2E]/60">Role</th>
                  <th className="text-left px-4 py-4 text-xs font-bold uppercase text-[#0A0E2E]/60">Status</th>
                  <th className="text-right px-6 py-4 text-xs font-bold uppercase text-[#0A0E2E]/60">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((s) => {
                  const isUpdating = updatingId === s.id;
                  const isSelf = String(s.id) === user.id;
                  return (
                    <tr key={s.id} className="border-b border-[#0A0E2E]/5 hover:bg-[#0A0E2E]/[0.02] transition-colors last:border-0">
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm">{s.firstName} {s.lastName}</p>
                        <p className="text-xs text-[#0A0E2E]/50">{s.email}</p>
                      </td>
                      <td className="px-4 py-4 text-sm text-[#0A0E2E]/70">{s.phoneNumber}</td>
                      <td className="px-4 py-4">
                        <Select
                          value={s.role}
                          onValueChange={(v) => handleRoleChange(s.id, v as StaffRole)}
                          disabled={isUpdating || isSelf}
                        >
                          <SelectTrigger className="h-8 w-36 text-xs font-bold border border-[#0A0E2E]/20 bg-[#0A0E2E]/5 text-[#0A0E2E]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {ROLE_OPTIONS.map((r) => (
                              <SelectItem key={r.value} value={r.value} className="text-xs font-bold">
                                {r.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold border ${
                          s.isActive
                            ? 'bg-[#0A0E2E]/5 text-[#0A0E2E] border-[#0A0E2E]/20'
                            : 'bg-[#0A0E2E]/5 text-[#0A0E2E]/40 border-[#0A0E2E]/10'
                        }`}>
                          {s.isActive
                            ? <><UserCheck className="w-3 h-3" /> Active</>
                            : <><UserX className="w-3 h-3" /> Inactive</>}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {!isSelf ? (
                          <button
                            onClick={() => handleToggleActive(s.id, !s.isActive)}
                            disabled={isUpdating}
                            className="text-xs font-bold px-3 py-1.5 rounded-md border border-[#0A0E2E]/20 text-[#0A0E2E] hover:bg-[#0A0E2E]/5 transition-colors disabled:opacity-40"
                          >
                            {isUpdating ? '...' : s.isActive ? 'Deactivate' : 'Activate'}
                          </button>
                        ) : (
                          <span className="text-xs text-[#0A0E2E]/30 italic">You</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <AddStaffModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSuccess={invalidate}
      />
    </div>
  );
}
