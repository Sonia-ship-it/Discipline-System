import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function setupTermAttendance() {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        console.log('Creating AttendanceStatus enum...');
        await pool.query(`
            DO $$ BEGIN
                CREATE TYPE "AttendanceStatus" AS ENUM ('REPORTED', 'NOT_REPORTED');
            EXCEPTION
                WHEN duplicate_object THEN null;
            END $$;
        `);

        console.log('Creating TermSession table...');
        await pool.query(`
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

                CONSTRAINT "TermSession_pkey" PRIMARY KEY ("id"),
                CONSTRAINT "TermSession_name_year_key" UNIQUE ("name", "year")
            );
        `);

        console.log('Creating TermAttendance table...');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS "TermAttendance" (
                "id" SERIAL NOT NULL,
                "termId" INTEGER NOT NULL,
                "studentId" INTEGER NOT NULL,
                "status" "AttendanceStatus" NOT NULL DEFAULT 'NOT_REPORTED',
                "arrivalTime" TIMESTAMP(3),
                "recordedById" INTEGER,
                "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "updatedAt" TIMESTAMP(3) NOT NULL,

                CONSTRAINT "TermAttendance_pkey" PRIMARY KEY ("id"),
                CONSTRAINT "TermAttendance_termId_studentId_key" UNIQUE ("termId", "studentId")
            );
        `);

        console.log('Adding foreign key constraints...');
        await pool.query(`
            DO $$ BEGIN
                ALTER TABLE "TermAttendance" 
                ADD CONSTRAINT "TermAttendance_studentId_fkey" 
                FOREIGN KEY ("studentId") REFERENCES "Student"("id") 
                ON DELETE RESTRICT ON UPDATE CASCADE;
            EXCEPTION
                WHEN duplicate_object THEN null;
            END $$;
        `);

        await pool.query(`
            DO $$ BEGIN
                ALTER TABLE "TermAttendance" 
                ADD CONSTRAINT "TermAttendance_termId_fkey" 
                FOREIGN KEY ("termId") REFERENCES "TermSession"("id") 
                ON DELETE RESTRICT ON UPDATE CASCADE;
            EXCEPTION
                WHEN duplicate_object THEN null;
            END $$;
        `);

        await pool.query(`
            DO $$ BEGIN
                ALTER TABLE "TermAttendance" 
                ADD CONSTRAINT "TermAttendance_recordedById_fkey" 
                FOREIGN KEY ("recordedById") REFERENCES "Staff"("id") 
                ON DELETE SET NULL ON UPDATE CASCADE;
            EXCEPTION
                WHEN duplicate_object THEN null;
            END $$;
        `);

        console.log('✅ Term Attendance tables created successfully!');
    } catch (error) {
        console.error('❌ Error creating tables:', error);
    } finally {
        await pool.end();
    }
}

setupTermAttendance();
