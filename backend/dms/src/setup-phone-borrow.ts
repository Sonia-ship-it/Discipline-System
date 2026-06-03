import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

async function setupPhoneBorrow() {
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL, // Use pooler connection
        ssl: {
            rejectUnauthorized: false
        }
    });

    try {
        console.log('Creating PhoneBorrowStatus enum...');
        await pool.query(`
            DO $$ BEGIN
                CREATE TYPE "PhoneBorrowStatus" AS ENUM ('BORROWED', 'RETURNED');
            EXCEPTION
                WHEN duplicate_object THEN null;
            END $$;
        `);

        console.log('Creating PhoneBorrow table...');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS "PhoneBorrow" (
                "id" SERIAL NOT NULL,
                "studentId" INTEGER NOT NULL,
                "phoneModel" TEXT NOT NULL DEFAULT 'Mara Z',
                "borrowedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "returnedAt" TIMESTAMP(3),
                "status" "PhoneBorrowStatus" NOT NULL DEFAULT 'BORROWED',
                "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
                "updatedAt" TIMESTAMP(3) NOT NULL,

                CONSTRAINT "PhoneBorrow_pkey" PRIMARY KEY ("id")
            );
        `);

        console.log('Adding foreign key constraint...');
        await pool.query(`
            DO $$ BEGIN
                ALTER TABLE "PhoneBorrow" 
                ADD CONSTRAINT "PhoneBorrow_studentId_fkey" 
                FOREIGN KEY ("studentId") REFERENCES "Student"("id") 
                ON DELETE RESTRICT ON UPDATE CASCADE;
            EXCEPTION
                WHEN duplicate_object THEN null;
            END $$;
        `);

        console.log('✅ PhoneBorrow table created successfully!');
    } catch (error) {
        console.error('❌ Error creating table:', error);
    } finally {
        await pool.end();
    }
}

setupPhoneBorrow();
