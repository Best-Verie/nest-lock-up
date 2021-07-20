import { DatabaseModule } from './../config/database/database.module';
import { Module } from '@nestjs/common';
import { TicketCategoriesService } from './ticket-categories.service';
import { TicketCategoriesController } from './ticket-categories.controller';
import { ticketCategoriesProvider } from './ticket.categories.provider';

@Module({
  imports:[DatabaseModule],
  providers: [TicketCategoriesService,...ticketCategoriesProvider],
  controllers: [TicketCategoriesController]
})
export class TicketCategoriesModule {}
