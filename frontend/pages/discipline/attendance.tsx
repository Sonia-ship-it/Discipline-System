import { DisciplineLayout } from '@/components/layout/DisciplineLayout';
import AttendanceList from '@/pages/discipline/AttendanceList';

export default function DisciplineAttendanceRoute() {
  return (
    <DisciplineLayout>
      <AttendanceList />
    </DisciplineLayout>
  );
}
