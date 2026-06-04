import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as bcrypt from 'bcrypt';

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

async function seedAdmin() {
    console.log('🌱 Seeding ADMIN account...\n');

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

        // Admin account details
        const email = 'johndoe@school.com';
        const password = 'Admin@123';
        const firstName = 'John';
        const lastName = 'Doe';
        const phoneNumber = '0788888888';
        const role = 'ADMIN';

        // Check if admin already exists
        const existing = await client.query(
            `SELECT * FROM "Staff" WHERE email = $1`,
            [email]
        );

        if (existing.rows.length > 0) {
            console.log(`✓ Admin account ${email} already exists`);
            console.log(`   ID: ${existing.rows[0].id}`);
            console.log(`   Name: ${existing.rows[0].firstName} ${existing.rows[0].lastName}`);
            console.log(`   Role: ${existing.rows[0].role || 'NOT SET'}`);

            // If role is not ADMIN or account is not active, update it
            if (existing.rows[0].role !== 'ADMIN' || !existing.rows[0].isActive) {
                await client.query(
                    `UPDATE "Staff" SET role = $1, "isActive" = $2 WHERE email = $3`,
                    ['ADMIN', true, email]
                );
                console.log(`   ✓ Updated role to ADMIN and activated account\n`);
            } else {
                console.log(`   ✓ Already configured correctly\n`);
            }
        } else {
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert new admin
            const result = await client.query(
                `INSERT INTO "Staff" ("firstName", "lastName", email, password, "phoneNumber", role, "isActive", "createdAt", "updatedAt")
         VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW())
         RETURNING id, "firstName", "lastName", email, role`,
                [firstName, lastName, email, hashedPassword, phoneNumber, role, true]
            );

            console.log(`✓ Created ADMIN account:`);
            console.log(`   ID: ${result.rows[0].id}`);
            console.log(`   Name: ${result.rows[0].firstName} ${result.rows[0].lastName}`);
            console.log(`   Email: ${result.rows[0].email}`);
            console.log(`   Role: ${result.rows[0].role}`);
            console.log(`   Password: ${password}\n`);
        }

        client.release();

        console.log('🎉 Admin seeding complete!');
        console.log('\n📋 ADMIN LOGIN CREDENTIALS:');
        console.log(`   Email: ${email}`);
        console.log(`   Password: ${password}`);
        console.log(`   Portal: http://localhost:3000/admin\n`);
    } catch (error) {
        console.error('❌ Seeding failed:', error);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

seedAdmin()
    .then(() => {
        process.exit(0);
    })
    .catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
