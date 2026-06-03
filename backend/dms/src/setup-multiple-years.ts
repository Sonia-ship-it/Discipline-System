import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

async function setupMultipleYears() {
  console.log('🚀 Setting up terms for multiple academic years...\n');

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

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await client.query(`DELETE FROM "TermAttendance"`);
    await client.query(`DELETE FROM "TermSession"`);
    console.log('✅ Cleared existing data\n');

    // Define academic years to create
    const academicYears = [
      {
        name: '2025-2026',
        terms: [
          {
            name: 'Term 1',
            year: 2025,
            startDate: '2025-09-01',
            endDate: '2025-12-18',
            openingDate: '2025-09-01',
          },
          {
            name: 'Term 2',
            year: 2026,
            startDate: '2026-01-05',
            endDate: '2026-04-10',
            openingDate: '2026-01-05',
          },
          {
            name: 'Term 3',
            year: 2026,
            startDate: '2026-05-04',
            endDate: '2026-07-31',
            openingDate: '2026-05-04',
          },
        ],
        activeTerm: 'Term 3', // Current term (we're in June 2026)
        activeYear: 2026,
      },
      {
        name: '2026-2027',
        terms: [
          {
            name: 'Term 1',
            year: 2026,
            startDate: '2026-09-01',
            endDate: '2026-12-18',
            openingDate: '2026-09-01',
          },
          {
            name: 'Term 2',
            year: 2027,
            startDate: '2027-01-05',
            endDate: '2027-04-10',
            openingDate: '2027-01-05',
          },
          {
            name: 'Term 3',
            year: 2027,
            startDate: '2027-05-04',
            endDate: '2027-07-31',
            openingDate: '2027-05-04',
          },
        ],
      },
      {
        name: '2027-2028',
        terms: [
          {
            name: 'Term 1',
            year: 2027,
            startDate: '2027-09-01',
            endDate: '2027-12-18',
            openingDate: '2027-09-01',
          },
          {
            name: 'Term 2',
            year: 2028,
            startDate: '2028-01-05',
            endDate: '2028-04-10',
            openingDate: '2028-01-05',
          },
          {
            name: 'Term 3',
            year: 2028,
            startDate: '2028-05-04',
            endDate: '2028-07-31',
            openingDate: '2028-05-04',
          },
        ],
      },
    ];

    // Create terms for each academic year
    for (const academicYear of academicYears) {
      console.log(`\n📅 Creating Academic Year: ${academicYear.name}`);
      console.log('─'.repeat(50));

      for (const term of academicYear.terms) {
        await client.query(
          `INSERT INTO "TermSession" (name, year, "startDate", "endDate", "openingDate", "isActive", "createdAt", "updatedAt")
           VALUES ($1, $2, $3, $4, $5, false, NOW(), NOW())`,
          [term.name, term.year, term.startDate, term.endDate, term.openingDate]
        );
        console.log(`✓ ${term.name} ${term.year}: ${term.startDate} to ${term.endDate}`);
      }
    }

    // Set current active term (Term 3 2026)
    console.log('\n⚡ Setting current active term...');
    await client.query(
      `UPDATE "TermSession" 
       SET "isActive" = true 
       WHERE name = 'Term 3' AND year = 2026`
    );
    console.log('✅ Term 3 2026 is now ACTIVE (current term)\n');

    client.release();

    console.log('═'.repeat(60));
    console.log('🎉 Successfully created terms for 3 academic years!');
    console.log('═'.repeat(60));
    
    console.log('\n📊 Summary:');
    console.log('\n📚 Academic Year 2025-2026:');
    console.log('   • Term 1 2025: Sep 2025 - Dec 2025 ✓ Completed');
    console.log('   • Term 2 2026: Jan 2026 - Apr 2026 ✓ Completed');
    console.log('   • Term 3 2026: May 2026 - Jul 2026 🟢 ACTIVE');
    
    console.log('\n📚 Academic Year 2026-2027:');
    console.log('   • Term 1 2026: Sep 2026 - Dec 2026 (Future)');
    console.log('   • Term 2 2027: Jan 2027 - Apr 2027 (Future)');
    console.log('   • Term 3 2027: May 2027 - Jul 2027 (Future)');
    
    console.log('\n📚 Academic Year 2027-2028:');
    console.log('   • Term 1 2027: Sep 2027 - Dec 2027 (Future)');
    console.log('   • Term 2 2028: Jan 2028 - Apr 2028 (Future)');
    console.log('   • Term 3 2028: May 2028 - Jul 2028 (Future)');

    console.log('\n💡 What happens when September 2026 comes?');
    console.log('   1. Admin goes to Opening Attendance page');
    console.log('   2. Selects "Term 1 2026" from dropdown');
    console.log('   3. Clicks "Activate" to make it the current term');
    console.log('   4. System is ready for new academic year 2026-2027!');

    console.log('\n📋 Next Steps:');
    console.log('   1. Start backend: npm run start:dev');
    console.log('   2. Test with current term (Term 3 2026)');
    console.log('   3. Terms ready for next 2 academic years! ✨\n');

  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupMultipleYears()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
