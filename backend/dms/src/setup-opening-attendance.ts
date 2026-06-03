import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

async function setupOpeningAttendance() {
  console.log('Setting up School Opening Day Attendance...\n');

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

    // Create Term Sessions for 2027
    const terms = [
      {
        name: 'Term 1',
        year: 2027,
        startDate: '2027-09-01',
        endDate: '2027-12-15',
        openingDate: '2027-09-01',
      },
      {
        name: 'Term 2',
        year: 2027,
        startDate: '2027-01-15',
        endDate: '2027-04-15',
        openingDate: '2027-01-15',
      },
      {
        name: 'Term 3',
        year: 2027,
        startDate: '2027-05-01',
        endDate: '2027-07-31',
        openingDate: '2027-05-01',
      },
    ];

    for (const term of terms) {
      // Check if term already exists
      const existing = await client.query(
        `SELECT * FROM "TermSession" WHERE name = $1 AND year = $2`,
        [term.name, term.year]
      );

      if (existing.rows.length === 0) {
        // Insert new term
        await client.query(
          `INSERT INTO "TermSession" (name, year, "startDate", "endDate", "openingDate", "isActive", "createdAt", "updatedAt")
           VALUES ($1, $2, $3, $4, $5, false, NOW(), NOW())`,
          [term.name, term.year, term.startDate, term.endDate, term.openingDate]
        );
        console.log(`✓ Created ${term.name} ${term.year}`);
      } else {
        console.log(`✓ ${term.name} ${term.year} already exists`);
      }
    }

    client.release();

    console.log('\n🎉 Setup complete!');
    console.log('\n📋 Next steps:');
    console.log('   1. Start backend: npm run start:dev');
    console.log('   2. Open frontend: http://localhost:3000/opening-attendance');
    console.log('   3. Select a term and click "Initialize Term Attendance"\n');
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupOpeningAttendance()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
