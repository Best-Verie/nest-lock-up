import { Module } from '@nestjs/common';
import { TicketCategoriesService } from './ticket-categories.service';
import { TicketCategoriesController } from './ticket-categories.controller';

@Module({
  providers: [TicketCategoriesService],
  controllers: [TicketCategoriesController]
})
export class TicketCategoriesModule {}
