import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { getPgPoolConfig } from './pg-pool.config';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
<<<<<<< HEAD
        const pool = new Pool(getPgPoolConfig());
=======
        const pool = new Pool({ 
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
>>>>>>> c1d689c033ea458577ba89d4d992c46c0b5e7516
        const adapter = new PrismaPg(pool);
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
