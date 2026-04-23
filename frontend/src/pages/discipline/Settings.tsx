import { AppHeader } from '@/components/layout/AppHeader';
import { useAuthStore } from '@/stores/authStore';

export default function SettingsPage() {
  const { user } = useAuthStore();

  return (
    <>
      <AppHeader title="Settings" subtitle="System Configuration & Profile" />
      <div className="max-w-3xl mx-auto px-6 py-8 space-y-6">
        <div className="bg-card rounded-md p-6 shadow-sm border space-y-4">
          <h3 className="font-semibold text-lg">Profile</h3>
          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm font-medium">Name
              <input defaultValue={user?.name} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block text-sm font-medium">Email
              <input defaultValue={user?.email} className="mt-1 w-full rounded-md border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
            </label>
          </div>
        </div>

      </div>
    </>
  );
}

