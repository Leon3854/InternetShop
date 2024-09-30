import { PrismaClient } from '@prisma/client';
import { OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown } from '@nestjs/common';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy, BeforeApplicationShutdown {
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
    beforeApplicationShutdown(signal?: string): Promise<void>;
}
