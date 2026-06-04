import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { getPgPoolConfig } from './pg-pool.config';


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const pool = new Pool(getPgPoolConfig());
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
