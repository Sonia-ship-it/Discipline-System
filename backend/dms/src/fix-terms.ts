import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

async function fixTerms() {
  console.log('🔧 Fixing Term Sessions...\n');

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

    // Step 1: Delete all existing attendance records first (due to foreign key)
    console.log('🗑️  Deleting existing attendance records...');
    await client.query(`DELETE FROM "TermAttendance"`);
    console.log('✅ Cleared all attendance records');
    
    // Step 2: Delete all existing terms
    console.log('🗑️  Deleting existing terms...');
    await client.query(`DELETE FROM "TermSession"`);
    console.log('✅ Cleared all existing terms\n');

    // Step 2: Create correct terms for 2025-2026 academic year
    console.log('📅 Creating correct terms for 2025-2026 academic year...\n');
    
    const terms = [
      {
        name: 'Term 1',
        year: 2025,
        startDate: '2025-09-01',  // September 2025
        endDate: '2025-12-18',    // December 2025
        openingDate: '2025-09-01',
      },
      {
        name: 'Term 2',
        year: 2026,
        startDate: '2026-01-05',  // January 2026
        endDate: '2026-04-10',    // April 2026
        openingDate: '2026-01-05',
      },
      {
        name: 'Term 3',
        year: 2026,
        startDate: '2026-05-04',  // May 2026
        endDate: '2026-07-31',    // July 2026
        openingDate: '2026-05-04',
      },
    ];

    for (const term of terms) {
      await client.query(
        `INSERT INTO "TermSession" (name, year, "startDate", "endDate", "openingDate", "isActive", "createdAt", "updatedAt")
         VALUES ($1, $2, $3, $4, $5, false, NOW(), NOW())`,
        [term.name, term.year, term.startDate, term.endDate, term.openingDate]
      );
      console.log(`✓ Created ${term.name} ${term.year}`);
      console.log(`   Dates: ${term.startDate} to ${term.endDate}`);
    }

    // Step 3: Set Term 3 2026 as active (current term - we're in June 2026)
    console.log('\n⚡ Setting Term 3 2026 as active...');
    await client.query(
      `UPDATE "TermSession" SET "isActive" = true WHERE name = 'Term 3' AND year = 2026`
    );
    console.log('✅ Term 3 2026 is now active (current term)\n');

    client.release();

    console.log('🎉 Terms fixed successfully!');
    console.log('\n📋 Current academic year 2025-2026 structure:');
    console.log('   📚 Term 1 2025: Sep 2025 - Dec 2025');
    console.log('   📚 Term 2 2026: Jan 2026 - Apr 2026');
    console.log('   📚 Term 3 2026: May 2026 - Jul 2026 (ACTIVE - Current Term)\n');
    console.log('💡 Today is June 3, 2026 - we are in Term 3 2026\n');
  } catch (error) {
    console.error('❌ Fix failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

fixTerms()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
