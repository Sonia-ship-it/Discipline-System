-- CreateTable
CREATE TABLE IF NOT EXISTS "TermSession" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "openingDate" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TermSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE IF NOT EXISTS "TermAttendance" (
    "id" SERIAL NOT NULL,
    "termId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    "status" "AttendanceStatus" NOT NULL DEFAULT 'NOT_REPORTED',
    "arrivalTime" TIMESTAMP(3),
    "recordedById" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TermAttendance_pkey" PRIMARY KEY ("id")
);

-- CreateEnum for AttendanceStatus if not exists
DO $$ BEGIN
    CREATE TYPE "AttendanceStatus" AS ENUM ('REPORTED', 'NOT_REPORTED');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "TermSession_name_year_key" ON "TermSession"("name", "year");

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "TermAttendance_termId_studentId_key" ON "TermAttendance"("termId", "studentId");

-- AddForeignKey
DO $$ BEGIN
    ALTER TABLE "TermAttendance" ADD CONSTRAINT "TermAttendance_recordedById_fkey" FOREIGN KEY ("recordedById") REFERENCES "Staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- AddForeignKey
DO $$ BEGIN
    ALTER TABLE "TermAttendance" ADD CONSTRAINT "TermAttendance_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- AddForeignKey
DO $$ BEGIN
    ALTER TABLE "TermAttendance" ADD CONSTRAINT "TermAttendance_termId_fkey" FOREIGN KEY ("termId") REFERENCES "TermSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;
