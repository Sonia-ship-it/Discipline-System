import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as bcrypt from 'bcrypt';

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

async function seedStaff() {
  console.log('🌱 Seeding staff member...\n');

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

    const email = 'uwasesonia43@gmail.com';
    const password = 'test@123';
    const firstName = 'UWASE';
    const lastName = 'Sonia';
    const phoneNumber = '0795300842';

    // Check if staff already exists
    const existing = await client.query(
      `SELECT * FROM "Staff" WHERE email = $1`,
      [email]
    );

    if (existing.rows.length > 0) {
      console.log(`✓ Staff member ${email} already exists`);
      console.log(`   ID: ${existing.rows[0].id}`);
      console.log(`   Name: ${existing.rows[0].firstName} ${existing.rows[0].lastName}`);
      console.log(`   Role: ${existing.rows[0].role || 'NOT SET'}`);

      // If role is not set, update it to ADMIN
      if (!existing.rows[0].role) {
        await client.query(
          `UPDATE "Staff" SET role = $1, "isActive" = $2 WHERE email = $3`,
          ['ADMIN', true, email]
        );
        console.log(`   ✓ Updated role to ADMIN\n`);
      } else {
        console.log('');
      }
    } else {
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert new staff member
      const result = await client.query(
        `INSERT INTO "Staff" ("firstName", "lastName", email, password, "phoneNumber", role, "isActive", "createdAt", "updatedAt")
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
         RETURNING id, "firstName", "lastName", email, role`,
        [firstName, lastName, email, hashedPassword, phoneNumber, 'ADMIN', true]
      );

      console.log(`✓ Created staff member:`);
      console.log(`   ID: ${result.rows[0].id}`);
      console.log(`   Name: ${result.rows[0].firstName} ${result.rows[0].lastName}`);
      console.log(`   Email: ${result.rows[0].email}`);
      console.log(`   Role: ${result.rows[0].role}`);
      console.log(`   Password: ${password}\n`);
    }

    client.release();

    console.log('🎉 Staff seeding complete!');
    console.log('\n📋 Login credentials:');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}\n`);
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seedStaff()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
