import { ticketProvider } from './tickets.provider';
import { DatabaseModule } from './../config/database/database.module';
import { TicketsService } from './tickets.service';
import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';

@Module({
  imports:[DatabaseModule],
  controllers: [TicketsController],
  providers: [TicketsService,...ticketProvider],
})
export class TicketsModule {}
