import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

async function addTermStatus() {
  console.log('🔧 Adding status field to TermSession...\n');

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.error('❌ ERROR: DATABASE_URL not found in .env file');
    process.exit(1);
  }

  const pool = new Pool({
    connectionString: databaseUrl,
  });

  try {
    const client = await pool.connect();

    // Step 1: Create TermStatus enum
    console.log('📝 Creating TermStatus enum...');
    await client.query(`
      DO $$ BEGIN
        CREATE TYPE "TermStatus" AS ENUM ('UPCOMING', 'ACTIVE', 'COMPLETED');
      EXCEPTION
        WHEN duplicate_object THEN 
          RAISE NOTICE 'TermStatus enum already exists';
      END $$;
    `);
    console.log('✅ TermStatus enum ready\n');

    // Step 2: Add status column to TermSession
    console.log('📝 Adding status column...');
    await client.query(`
      DO $$ BEGIN
        ALTER TABLE "TermSession" 
        ADD COLUMN IF NOT EXISTS status "TermStatus" DEFAULT 'UPCOMING';
      EXCEPTION
        WHEN duplicate_column THEN 
          RAISE NOTICE 'status column already exists';
      END $$;
    `);
    console.log('✅ Status column added\n');

    // Step 3: Update existing terms based on their dates and active status
    console.log('📝 Updating existing term statuses...');
    
    // Set active term to ACTIVE
    await client.query(`
      UPDATE "TermSession" 
      SET status = 'ACTIVE' 
      WHERE "isActive" = true;
    `);
    
    // Set past terms to COMPLETED (end date before today)
    await client.query(`
      UPDATE "TermSession" 
      SET status = 'COMPLETED' 
      WHERE "endDate" < NOW() AND "isActive" = false;
    `);
    
    // Set future terms to UPCOMING (start date after today)
    await client.query(`
      UPDATE "TermSession" 
      SET status = 'UPCOMING' 
      WHERE "startDate" > NOW() AND "isActive" = false;
    `);
    
    console.log('✅ Term statuses updated\n');

    // Step 4: Show results
    const result = await client.query(`
      SELECT name, year, status, "isActive"
      FROM "TermSession" 
      ORDER BY year, 
        CASE name 
          WHEN 'Term 1' THEN 1 
          WHEN 'Term 2' THEN 2 
          WHEN 'Term 3' THEN 3 
        END;
    `);

    console.log('📊 Current Term Statuses:');
    console.log('─'.repeat(50));
    result.rows.forEach((row) => {
      const activeLabel = row.isActive ? '(ACTIVE)' : '';
      console.log(`${row.name} ${row.year}: ${row.status} ${activeLabel}`);
    });

    client.release();

    console.log('\n🎉 Successfully added term status field!');
    console.log('\n📋 Next Steps:');
    console.log('   1. Regenerate Prisma client: npx prisma generate');
    console.log('   2. Restart backend server');
    console.log('   3. Use the updated Manage Terms page\n');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

addTermStatus()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
