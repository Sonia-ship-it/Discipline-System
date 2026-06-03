# School Opening Day Attendance Module

## Overview
The School Opening Day Attendance module allows schools to track which students report back at the beginning of each academic term, record arrival times, notify parents via SMS, and generate comprehensive reports.

## Academic Terms
The system supports three terms per academic year:
- **Term 1**: September – December
- **Term 2**: January – April
- **Term 3**: May – July

## Setup Instructions

### 1. Database Migration
The schema is already defined in `prisma/schema.prisma` with the following models:
- `TermSession`: Stores term information (name, year, dates, active status)
- `TermAttendance`: Stores individual student attendance records

Run the migration when your database is available:
```bash
cd backend/dms
npx prisma migrate dev
```

### 2. Initialize Term Sessions
Create the academic term sessions:
```bash
npm run setup:opening-attendance
```

This creates the three terms for the 2027 academic year. You can modify the dates in `src/setup-opening-attendance.ts` as needed.

## Usage Flow

### 1. Start a New Term
1. Navigate to Opening Attendance page
2. Select the current term from the dropdown
3. Click "Initialize Term Attendance" to create records for all active students

### 2. Mark Student Attendance
1. Use the search bar to find specific students
2. Filter by status (All/Reported/Not Yet Reported)
3. Click "Mark Reported" when a student arrives
4. The system automatically records:
   - Student name and class
   - Date and arrival time
   - Staff member recording the attendance

### 3. View Dashboard
The dashboard displays real-time statistics:
- Total Students Expected
- Students Reported
- Students Not Yet Reported
- Reporting Percentage

### 4. Generate Reports
Navigate to "View Reports" to access:

#### Opening Day Report
- Lists all students with their attendance status
- Shows individual arrival times
- Exportable to CSV

#### Class Reporting Report
- Summary by class group
- Shows expected vs. reported students
- Displays missing students count
- Calculates reporting rate per class

## API Endpoints

### Term Management
- `POST /opening-attendance/term-sessions` - Create term
- `GET /opening-attendance/term-sessions` - List all terms
- `GET /opening-attendance/term-sessions/active` - Get active term
- `POST /opening-attendance/term-sessions/:id/activate` - Set active term
- `POST /opening-attendance/term-sessions/:id/initialize` - Initialize attendance

### Attendance Management
- `GET /opening-attendance/terms/:id/attendances` - Get all attendance records
- `POST /opening-attendance/mark` - Mark student attendance
- `GET /opening-attendance/terms/:id/dashboard` - Get dashboard stats

### Reports
- `GET /opening-attendance/terms/:id/reports/opening-day` - Detailed report
- `GET /opening-attendance/terms/:id/reports/class-reporting` - Class summary

## Parent Notification
When a student is marked as "REPORTED", the system logs an SMS notification:
```
Dear Parent/Guardian, your child [Name] has successfully reported back to school 
for [Term] on [Date] at [Time].
```

**Note**: SMS integration needs to be implemented with your SMS provider (e.g., Twilio, Africa's Talking). Update the `markAttendance` method in `opening-attendance.service.ts` to integrate with your SMS service.

## Features
✓ Multi-term management
✓ Real-time dashboard statistics
✓ Student search and filtering
✓ Automatic timestamp recording
✓ Staff member tracking
✓ CSV export for reports
✓ Class-based reporting
✓ SMS notification hooks (ready for integration)

## Database Schema

### TermSession
- `id`: Primary key
- `name`: Term name (e.g., "Term 1")
- `year`: Academic year
- `startDate`: Term start date
- `endDate`: Term end date
- `openingDate`: School opening date
- `isActive`: Boolean flag for active term

### TermAttendance
- `id`: Primary key
- `termId`: Reference to TermSession
- `studentId`: Reference to Student
- `status`: REPORTED | NOT_REPORTED
- `arrivalTime`: Timestamp when marked reported
- `recordedById`: Reference to Staff member
- `createdAt`: Record creation timestamp
- `updatedAt`: Last update timestamp

## Workflow Example

### Beginning of Term 2 (January 15, 2027)
1. Administrator logs in
2. Selects "Term 2 2027" from dropdown
3. Clicks "Initialize Term Attendance" → creates records for 850 students
4. As students arrive:
   - David Brown arrives at 07:35 AM → Mark as Reported
   - Parent receives SMS: "Dear Parent/Guardian, your child David Brown has successfully reported back to school for Term 2 on 15 January 2027 at 07:35 AM."
5. Dashboard updates: 
   - Expected: 850
   - Reported: 1
   - Not Reported: 849
   - Rate: 0.1%

### End of Opening Day
1. Navigate to Reports
2. Generate "Opening Day Report" → shows all 850 students with their status
3. Generate "Class Reporting Report" → shows:
   - S3A: Expected 45, Reported 42, Missing 3 (93.3%)
   - S2B: Expected 50, Reported 48, Missing 2 (96.0%)
   - etc.
4. Export reports to CSV for record keeping

## Customization
- Modify term dates in `setup-opening-attendance.ts`
- Add SMS provider integration in `opening-attendance.service.ts`
- Customize report formats in the frontend components
- Add additional filters or statistics as needed
