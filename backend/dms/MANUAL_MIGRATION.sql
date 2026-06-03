-- Manual Migration for Opening Attendance Module
-- Run this SQL directly in your database (Supabase SQL Editor or pgAdmin)

-- Step 1: Create AttendanceStatus enum if it doesn't exist
DO $$ BEGIN
    CREATE TYPE "AttendanceStatus" AS ENUM ('REPORTED', 'NOT_REPORTED');
EXCEPTION
    WHEN duplicate_object THEN 
        RAISE NOTICE 'AttendanceStatus enum already exists, skipping';
END $$;

-- Step 2: Create TermSession table
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

-- Step 3: Create TermAttendance table
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

-- Step 4: Create unique indexes
CREATE UNIQUE INDEX IF NOT EXISTS "TermSession_name_year_key" ON "TermSession"("name", "year");
CREATE UNIQUE INDEX IF NOT EXISTS "TermAttendance_termId_studentId_key" ON "TermAttendance"("termId", "studentId");

-- Step 5: Add foreign keys (with error handling)
DO $$ 
BEGIN
    -- Add foreign key to Staff
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'TermAttendance_recordedById_fkey'
    ) THEN
        ALTER TABLE "TermAttendance" 
        ADD CONSTRAINT "TermAttendance_recordedById_fkey" 
        FOREIGN KEY ("recordedById") 
        REFERENCES "Staff"("id") 
        ON DELETE SET NULL 
        ON UPDATE CASCADE;
    END IF;

    -- Add foreign key to Student
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'TermAttendance_studentId_fkey'
    ) THEN
        ALTER TABLE "TermAttendance" 
        ADD CONSTRAINT "TermAttendance_studentId_fkey" 
        FOREIGN KEY ("studentId") 
        REFERENCES "Student"("id") 
        ON DELETE RESTRICT 
        ON UPDATE CASCADE;
    END IF;

    -- Add foreign key to TermSession
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'TermAttendance_termId_fkey'
    ) THEN
        ALTER TABLE "TermAttendance" 
        ADD CONSTRAINT "TermAttendance_termId_fkey" 
        FOREIGN KEY ("termId") 
        REFERENCES "TermSession"("id") 
        ON DELETE RESTRICT 
        ON UPDATE CASCADE;
    END IF;
END $$;

-- Step 6: Verify tables were created
SELECT 'TermSession table created' as status 
WHERE EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_name = 'TermSession'
);

SELECT 'TermAttendance table created' as status 
WHERE EXISTS (
    SELECT 1 FROM information_schema.tables 
    WHERE table_name = 'TermAttendance'
);

-- Done!
SELECT 'Migration completed successfully!' as result;
