export class MarkOpeningAttendanceDto {
  termId: number;
  studentId: number;
  status: 'REPORTED' | 'NOT_REPORTED';
  arrivalTime?: Date;
  recordedById?: number;
}
