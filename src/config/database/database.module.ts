import { databaseProviders } from './database';
import { Module } from '@nestjs/common';
@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule {}
