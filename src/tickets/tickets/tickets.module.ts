import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';

@Module({
  controllers: [TicketsController]
})
export class TicketsModule {}
