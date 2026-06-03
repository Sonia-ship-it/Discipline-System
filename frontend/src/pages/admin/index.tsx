import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/authStore';
import { useQuery } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import {
  Users, FileText, GraduationCap, Bell, Shield,
  ExternalLink, BookOpen, Stethoscope, ArrowRight,
  Settings, LogOut, ChevronDown,
} from 'lucide-react';
import Link from 'next/link';

interface Overview {
  totalStudents: number;
  totalStaff: number;
  totalRecords: number;
  activeTerm: { id: number; name: string } | null;
  totalNotificationsSent: number;
  staffByRole: { role: string; count: number }[];
}

const ROLE_CONFIG: Record<string, {
  label: string;
  icon: React.ElementType;
  description: string;
  link: string;
  external?: boolean;
}> = {
  DISCIPLINE: {
    label: 'Discipline Staff',
    icon: Shield,
    description: 'Full access to the Discipline Management System — students, records, transport, attendance.',
    link: '/discipline/dashboard',
  },
  NURSE: {
    label: 'School Nurse',
    icon: Stethoscope,
    description: 'Access to Discipline Records only — view and edit exit records for health-related reasons.',
    link: '/discipline/records',
  },
  LIBRARIAN: {
    label: 'Librarian',
    icon: BookOpen,
    description: 'Access to the Library Management System — manage books, loans, and student borrowing.',
    link: process.env.NEXT_PUBLIC_LIBRARY_URL || '/library',
    external: true,
  },
};

function AdminHeader({ firstName, lastName }: { firstName: string; lastName: string }) {
  const router = useRouter();
  const { logout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const initials = `${firstName[0] ?? ''}${lastName[0] ?? ''}`.toUpperCase();

  return (
    <header className="bg-[#0A0E2E] h-16 flex items-center justify-between px-6 sticky top-0 z-30">
      <div>
        <h1 className="text-white font-bold text-xl leading-tight">Admin Portal</h1>
        <p className="text-white/60 text-xs font-medium mt-0.5">
          Welcome back, {firstName} {lastName}
        </p>
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
              onClick={() => { setOpen(false); router.push('/discipline/settings'); }}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-white/80 hover:bg-white/10 transition-colors"
            >
              <Settings className="w-4 h-4" /> Settings
            </button>
            <div className="h-px bg-white/10 my-1" />
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

export default function AdminDashboard() {
  const router = useRouter();
  const { user, isAuthenticated, hydrated } = useAuthStore();

  useEffect(() => {
    if (!hydrated) return;
    if (!isAuthenticated) { router.push('/auth/login'); return; }
    if (user?.role !== 'ADMIN') { router.push('/discipline/dashboard'); }
  }, [hydrated, isAuthenticated, user, router]);

  const { data: overview } = useQuery<Overview>({
    queryKey: ['admin', 'overview'],
    queryFn: () => apiFetch('/admin/overview'),
    enabled: user?.role === 'ADMIN',
    staleTime: 1000 * 30,
  });

  if (!hydrated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-[#0A0E2E] border-t-transparent" />
      </div>
    );
  }

  if (!user || user.role !== 'ADMIN') return null;

  const stats = [
    { label: 'Total Students', value: overview?.totalStudents ?? '—', icon: Users },
    { label: 'Active Staff', value: overview?.totalStaff ?? '—', icon: Shield },
    { label: 'Discipline Records', value: overview?.totalRecords ?? '—', icon: FileText },
    { label: 'Notifications Sent', value: overview?.totalNotificationsSent ?? '—', icon: Bell },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A0E2E]">
      <AdminHeader firstName={user.firstName} lastName={user.lastName} />

      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8 animate-in fade-in duration-700">

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-md border border-[#0A0E2E]/15 p-5 shadow-sm">
              <div className="w-10 h-10 rounded-md bg-[#0A0E2E] flex items-center justify-center mb-3">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-2xl font-extrabold text-[#0A0E2E]">{s.value}</p>
              <p className="text-xs font-semibold text-[#0A0E2E]/60 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Active term */}
        {overview?.activeTerm && (
          <div className="bg-[#0A0E2E] rounded-md p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-white/70" />
              <div>
                <p className="text-xs font-bold text-white/60 uppercase tracking-wider">Active Academic Term</p>
                <p className="font-bold text-lg">{overview.activeTerm.name}</p>
              </div>
            </div>
            <Link
              href="/discipline/attendance"
              className="flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors"
            >
              View Attendance <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Staff by role */}
        {overview?.staffByRole && overview.staffByRole.length > 0 && (
          <div className="bg-white rounded-md border border-[#0A0E2E]/15 p-6 shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-[#0A0E2E]">Staff by Role</h3>
            <div className="flex flex-wrap gap-3">
              {overview.staffByRole.map((r) => {
                const cfg = ROLE_CONFIG[r.role];
                const Icon = cfg?.icon ?? Shield;
                const label = cfg?.label ?? r.role;
                return (
                  <div
                    key={r.role}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#0A0E2E]/5 border border-[#0A0E2E]/10"
                  >
                    <Icon className="w-4 h-4 text-[#0A0E2E]/70" />
                    <span className="text-sm font-bold text-[#0A0E2E]">{label}</span>
                    <span className="text-xs font-black text-[#0A0E2E]/50">({r.count})</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* System Portals */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-[#0A0E2E]">System Portals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(['DISCIPLINE', 'NURSE', 'LIBRARIAN'] as const).map((role) => {
              const cfg = ROLE_CONFIG[role];
              return (
                <div
                  key={role}
                  className="bg-white rounded-md border border-[#0A0E2E]/15 p-6 shadow-sm flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-md bg-[#0A0E2E]/5 border border-[#0A0E2E]/10 flex items-center justify-center">
                    <cfg.icon className="w-6 h-6 text-[#0A0E2E]" />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#0A0E2E]">{cfg.label}</p>
                    <p className="text-xs text-[#0A0E2E]/60 mt-1 leading-relaxed">{cfg.description}</p>
                  </div>
                  {cfg.external ? (
                    <a
                      href={cfg.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-[#0A0E2E] hover:underline"
                    >
                      Open Library System <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={cfg.link}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#0A0E2E] hover:underline"
                    >
                      Open Portal <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 pb-8">
          <Link
            href="/admin/users"
            className="flex items-center gap-2 px-5 py-3 bg-[#0A0E2E] text-white rounded-md text-sm font-bold hover:bg-[#1a264a] transition-colors"
          >
            <Users className="w-4 h-4" /> Manage Staff & Roles
          </Link>
          <Link
            href="/discipline/students"
            className="flex items-center gap-2 px-5 py-3 border border-[#0A0E2E]/15 text-[#0A0E2E] rounded-md text-sm font-bold hover:bg-[#0A0E2E]/5 transition-colors"
          >
            <GraduationCap className="w-4 h-4" /> View Students
          </Link>
        </div>
      </div>
    </div>
  );
}
