import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

async function runMigration() {
  console.log('🚀 Starting Opening Attendance Migration...\n');

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.error('❌ ERROR: DATABASE_URL not found in .env file');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: databaseUrl,
  });

  try {
    console.log('📡 Connecting to database...');
    const client = await pool.connect();
    console.log('✅ Connected to database successfully\n');

    // Step 1: Handle enum creation/update separately
    console.log('📝 Step 1: Handling AttendanceStatus enum...');
    
    // Check if enum exists
    const enumCheck = await client.query(`
      SELECT EXISTS (
        SELECT 1 FROM pg_type WHERE typname = 'AttendanceStatus'
      ) as exists;
    `);

    if (!enumCheck.rows[0].exists) {
      // Create new enum
      await client.query(`CREATE TYPE "AttendanceStatus" AS ENUM ('REPORTED', 'NOT_REPORTED');`);
      console.log('✅ Created AttendanceStatus enum');
    } else {
      console.log('✅ AttendanceStatus enum already exists');
      
      // Check for REPORTED value
      const reportedExists = await client.query(`
        SELECT EXISTS (
          SELECT 1 FROM pg_enum 
          WHERE enumlabel = 'REPORTED' 
          AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'AttendanceStatus')
        ) as exists;
      `);
      
      if (!reportedExists.rows[0].exists) {
        await client.query(`ALTER TYPE "AttendanceStatus" ADD VALUE 'REPORTED';`);
        console.log('✅ Added REPORTED to enum');
      }
      
      // Check for NOT_REPORTED value
      const notReportedExists = await client.query(`
        SELECT EXISTS (
          SELECT 1 FROM pg_enum 
          WHERE enumlabel = 'NOT_REPORTED' 
          AND enumtypid = (SELECT oid FROM pg_type WHERE typname = 'AttendanceStatus')
        ) as exists;
      `);
      
      if (!notReportedExists.rows[0].exists) {
        await client.query(`ALTER TYPE "AttendanceStatus" ADD VALUE 'NOT_REPORTED';`);
        console.log('✅ Added NOT_REPORTED to enum');
      }
    }

    // Step 2: Create tables
    console.log('\n📝 Step 2: Creating tables...');
    await client.query(`
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
    `);
    console.log('✅ TermSession table ready');

    await client.query(`
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
    `);
    console.log('✅ TermAttendance table ready');

    // Step 3: Create indexes
    console.log('\n📝 Step 3: Creating indexes...');
    await client.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS "TermSession_name_year_key" 
      ON "TermSession"("name", "year");
    `);
    await client.query(`
      CREATE UNIQUE INDEX IF NOT EXISTS "TermAttendance_termId_studentId_key" 
      ON "TermAttendance"("termId", "studentId");
    `);
    console.log('✅ Indexes created');

    // Step 4: Add foreign keys
    console.log('\n📝 Step 4: Adding foreign keys...');
    
    // Check and add foreign keys one by one
    const fkChecks = [
      {
        name: 'TermAttendance_recordedById_fkey',
        sql: `ALTER TABLE "TermAttendance" ADD CONSTRAINT "TermAttendance_recordedById_fkey" 
              FOREIGN KEY ("recordedById") REFERENCES "Staff"("id") 
              ON DELETE SET NULL ON UPDATE CASCADE;`
      },
      {
        name: 'TermAttendance_studentId_fkey',
        sql: `ALTER TABLE "TermAttendance" ADD CONSTRAINT "TermAttendance_studentId_fkey" 
              FOREIGN KEY ("studentId") REFERENCES "Student"("id") 
              ON DELETE RESTRICT ON UPDATE CASCADE;`
      },
      {
        name: 'TermAttendance_termId_fkey',
        sql: `ALTER TABLE "TermAttendance" ADD CONSTRAINT "TermAttendance_termId_fkey" 
              FOREIGN KEY ("termId") REFERENCES "TermSession"("id") 
              ON DELETE RESTRICT ON UPDATE CASCADE;`
      }
    ];

    for (const fk of fkChecks) {
      const exists = await client.query(`
        SELECT EXISTS (
          SELECT 1 FROM pg_constraint WHERE conname = $1
        ) as exists;
      `, [fk.name]);

      if (!exists.rows[0].exists) {
        await client.query(fk.sql);
        console.log(`✅ Added ${fk.name}`);
      } else {
        console.log(`✅ ${fk.name} already exists`);
      }
    }

    // Verify tables were created
    console.log('\n🔍 Verifying migration...');
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('TermSession', 'TermAttendance')
      ORDER BY table_name;
    `);

    if (result.rows.length === 2) {
      console.log('✅ All tables verified');
    } else {
      console.log('⚠️  Warning: Not all tables were found');
    }

    client.release();

    console.log('\n🎉 Migration completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('   1. Run: npm run setup:opening-attendance');
    console.log('   2. Start backend: npm run start:dev');
    console.log('   3. Test the feature!\n');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigration()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
