import {Injectable, OnModuleInit} from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';
import databaseURL from "../../utils/db.js";

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
    constructor() {
        const adapter = new PrismaPg({
            connectionString: databaseURL as string,
        });
        super({ adapter });
    }
    async onModuleInit() {
        await this.$connect();
    }
}