import {Injectable, OnModuleInit} from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    constructor() {

        const databaseurl = process.env.NODE_ENV ==="dev" ? process.env.DEV_DATABASE_URL: process.env.PROD_DATABASE_URL;

        const adapter = new PrismaPg({
            connectionString: databaseurl as string,
        });
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
    }
}