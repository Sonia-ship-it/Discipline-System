import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { apiFetch } from '@/lib/api';
import { toast } from 'sonner';
import { Loader2, Send, CheckCircle2, XCircle } from 'lucide-react';

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  fatherPhoneNumber: string;
  motherPhoneNumber: string;
}

interface TestNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  students: Student[];
}

export function TestNotificationModal({
  isOpen,
  onClose,
  students,
}: TestNotificationModalProps) {
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [phone, setPhone] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const selectedStudent = students.find((s) => s.id === parseInt(selectedStudentId));

  const handleStudentChange = (id: string) => {
    setSelectedStudentId(id);
    setResult(null);
    const student = students.find((s) => s.id === parseInt(id));
    if (student && student.fatherPhoneNumber) {
      setPhone(student.fatherPhoneNumber);
    }
  };

  const useFatherPhone = () => {
    if (selectedStudent?.fatherPhoneNumber) {
      setPhone(selectedStudent.fatherPhoneNumber);
    }
  };

  const useMotherPhone = () => {
    if (selectedStudent?.motherPhoneNumber) {
      setPhone(selectedStudent.motherPhoneNumber);
    }
  };

  const handleTest = async () => {
    if (!selectedStudentId) {
      toast.error('Please select a student');
      return;
    }
    if (!phone.trim()) {
      toast.error('Please enter a phone number');
      return;
    }

    setSending(true);
    setResult(null);
    try {
      const res = await apiFetch('/notifications/test', {
        method: 'POST',
        body: JSON.stringify({
          studentId: parseInt(selectedStudentId),
          phone: phone.trim(),
          customMessage: customMessage.trim() || undefined,
        }),
      });

      setResult({
        success: res.success,
        message: res.message,
      });

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error: any) {
      const msg = error.message || 'Failed to send test notification';
      setResult({
        success: false,
        message: msg,
      });
      toast.error(msg);
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    setSelectedStudentId('');
    setPhone('');
    setCustomMessage('');
    setResult(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-lg border-[#0A0E2E]/15 bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#0A0E2E] text-xl font-bold">
            Test Parent Notification
          </DialogTitle>
          <p className="text-sm text-[#0A0E2E]/70 font-medium mt-1">
            Send a test SMS to verify that notifications are working before enabling bulk notifications.
          </p>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="student" className="text-xs font-bold uppercase text-[#0A0E2E]/60">
              Select Student
            </Label>
            <Select value={selectedStudentId} onValueChange={handleStudentChange}>
              <SelectTrigger className="border-[#0A0E2E]/15">
                <SelectValue placeholder="Choose a student..." />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {students.map((s) => (
                  <SelectItem key={s.id} value={s.id.toString()}>
                    {s.firstName} {s.lastName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedStudent && (
            <div className="rounded-md bg-[#0A0E2E]/5 p-3 space-y-2 border border-[#0A0E2E]/10">
              <p className="text-xs font-bold uppercase text-[#0A0E2E]/60 mb-2">
                Registered phone numbers
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={useFatherPhone}
                  disabled={!selectedStudent.fatherPhoneNumber}
                  className="px-3 py-1.5 text-xs font-bold rounded-md border border-[#0A0E2E]/20 bg-white hover:bg-[#0A0E2E]/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Father: {selectedStudent.fatherPhoneNumber || 'N/A'}
                </button>
                <button
                  onClick={useMotherPhone}
                  disabled={!selectedStudent.motherPhoneNumber}
                  className="px-3 py-1.5 text-xs font-bold rounded-md border border-[#0A0E2E]/20 bg-white hover:bg-[#0A0E2E]/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Mother: {selectedStudent.motherPhoneNumber || 'N/A'}
                </button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs font-bold uppercase text-[#0A0E2E]/60">
              Test Phone Number
            </Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +250788123456 or 0788123456"
              className="border-[#0A0E2E]/15 font-mono"
            />
            <p className="text-xs text-[#0A0E2E]/50">
              Enter the phone number you want to test. Use a number you have access to.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs font-bold uppercase text-[#0A0E2E]/60">
              Custom Message (Optional)
            </Label>
            <textarea
              id="message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows={3}
              placeholder="Leave blank to use the default attendance notification message"
              className="w-full rounded-md border border-[#0A0E2E]/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#0A0E2E]/20 resize-none"
            />
          </div>

          {result && (
            <div
              className={`rounded-md p-4 flex items-start gap-3 ${
                result.success
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              {result.success ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p
                  className={`text-sm font-bold ${
                    result.success ? 'text-green-900' : 'text-red-900'
                  }`}
                >
                  {result.success ? 'Success!' : 'Failed'}
                </p>
                <p
                  className={`text-xs ${
                    result.success ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {result.message}
                </p>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={handleClose}
            className="border-[#0A0E2E]/15"
          >
            Close
          </Button>
          <Button
            onClick={handleTest}
            disabled={sending || !selectedStudentId || !phone.trim()}
            className="bg-[#0A0E2E] hover:bg-[#1a264a] text-white"
          >
            {sending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Test SMS
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
