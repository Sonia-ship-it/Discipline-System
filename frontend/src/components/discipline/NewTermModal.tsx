import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { apiFetch } from '@/lib/api';
import { toast } from 'sonner';

interface NewTermModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function NewTermModal({ isOpen, onClose, onSuccess }: NewTermModalProps) {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [endDate, setEndDate] = useState('');
  const [setActive, setSetActive] = useState(true);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Term name is required');
      return;
    }
    setSaving(true);
    try {
      await apiFetch('/terms', {
        method: 'POST',
        body: JSON.stringify({
          name: name.trim(),
          startDate,
          endDate: endDate || undefined,
          isActive: setActive,
        }),
      });
      toast.success('Academic term created');
      setName('');
      onSuccess();
      onClose();
    } catch {
      toast.error('Failed to create term');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md border-[#0A0E2E]/15">
        <DialogHeader>
          <DialogTitle className="text-[#0A0E2E]">New Academic Term</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="term-name">Term name</Label>
            <Input
              id="term-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Term 1 — 2026"
              className="mt-1 border-[#0A0E2E]/15"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="start-date">Start date</Label>
              <Input
                id="start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1 border-[#0A0E2E]/15"
              />
            </div>
            <div>
              <Label htmlFor="end-date">End date (optional)</Label>
              <Input
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1 border-[#0A0E2E]/15"
              />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm font-medium text-[#0A0E2E]">
            <input
              type="checkbox"
              checked={setActive}
              onChange={(e) => setSetActive(e.target.checked)}
              className="rounded border-[#0A0E2E]/30"
            />
            Set as active term
          </label>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="border-[#0A0E2E]/15">
              Cancel
            </Button>
            <Button type="submit" disabled={saving} className="bg-[#0A0E2E] hover:bg-[#1a264a]">
              {saving ? 'Saving…' : 'Create term'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
