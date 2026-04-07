import 'dotenv/config';
import { PrismaClient, Status } from '../src/generated';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.student.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      fatherName: 'Mark Doe',
      motherName: 'Anna Doe',
      fatherPhoneNumber: '123456789',
      motherPhoneNumber: '987654321',
      year: 'Year 1',
      classGroup: 'A',
      status: Status.IN,
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());