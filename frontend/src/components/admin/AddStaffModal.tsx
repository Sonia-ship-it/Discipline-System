import { useState } from 'react';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { apiFetch } from '@/lib/api';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import type { StaffRole } from '@/stores/authStore';

interface AddStaffModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ROLE_OPTIONS: { value: StaffRole; label: string; description: string }[] = [
  { value: 'DISCIPLINE', label: 'Discipline Staff', description: 'Full discipline system access' },
  { value: 'NURSE', label: 'School Nurse', description: 'Discipline records only' },
  { value: 'LIBRARIAN', label: 'Librarian', description: 'Library system only' },
  { value: 'ADMIN', label: 'Administrator', description: 'Full admin access' },
];

export function AddStaffModal({ isOpen, onClose, onSuccess }: AddStaffModalProps) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'DISCIPLINE' as StaffRole,
  });
  const [saving, setSaving] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      toast.error('Please fill in all required fields');
      return;
    }
    setSaving(true);
    try {
      await apiFetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      // Assign the role after registering
      // (register creates with DISCIPLINE default, then we update role)
      // Actually we pass role in register — backend toStaffCreateData handles it
      toast.success(`${form.firstName} ${form.lastName} added successfully`);
      setForm({ firstName: '', lastName: '', email: '', phoneNumber: '', password: '', role: 'DISCIPLINE' });
      onSuccess();
      onClose();
    } catch (err: any) {
      toast.error(err.message || 'Failed to add staff member');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-lg bg-white border-[#0A0E2E]/15">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#0A0E2E]">Add Staff Member</DialogTitle>
          <p className="text-sm text-[#0A0E2E]/60">Create a new account and assign a role.</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold uppercase text-[#0A0E2E]/60">First Name *</Label>
              <Input
                value={form.firstName}
                onChange={(e) => update('firstName', e.target.value)}
                placeholder="John"
                className="border-[#0A0E2E]/15"
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold uppercase text-[#0A0E2E]/60">Last Name *</Label>
              <Input
                value={form.lastName}
                onChange={(e) => update('lastName', e.target.value)}
                placeholder="Doe"
                className="border-[#0A0E2E]/15"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase text-[#0A0E2E]/60">Email *</Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              placeholder="john.doe@school.com"
              className="border-[#0A0E2E]/15"
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase text-[#0A0E2E]/60">Phone Number</Label>
            <Input
              value={form.phoneNumber}
              onChange={(e) => update('phoneNumber', e.target.value)}
              placeholder="0788123456"
              className="border-[#0A0E2E]/15"
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase text-[#0A0E2E]/60">Temporary Password *</Label>
            <Input
              type="password"
              value={form.password}
              onChange={(e) => update('password', e.target.value)}
              placeholder="Min. 8 characters"
              className="border-[#0A0E2E]/15"
            />
          </div>

          <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase text-[#0A0E2E]/60">Role *</Label>
            <Select value={form.role} onValueChange={(v) => update('role', v)}>
              <SelectTrigger className="border-[#0A0E2E]/15">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {ROLE_OPTIONS.map((r) => (
                  <SelectItem key={r.value} value={r.value}>
                    <div>
                      <p className="font-bold text-sm">{r.label}</p>
                      <p className="text-xs text-[#0A0E2E]/50">{r.description}</p>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-[#0A0E2E]/50">
              {form.role === 'DISCIPLINE' && 'This person will access the full Discipline System.'}
              {form.role === 'NURSE' && 'This person will only see the Discipline Records page.'}
              {form.role === 'LIBRARIAN' && 'This person will be redirected to the Library System after login.'}
              {form.role === 'ADMIN' && 'This person will have full admin access to manage all staff and roles.'}
            </p>
          </div>

          <DialogFooter className="pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-[#0A0E2E]/15">
              Cancel
            </Button>
            <Button type="submit" disabled={saving} className="bg-[#0A0E2E] hover:bg-[#1a264a] text-white">
              {saving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adding...</> : 'Add Staff Member'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
