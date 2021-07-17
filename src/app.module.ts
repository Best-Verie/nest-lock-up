import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenuesModule } from './venues/venues.module';
import { EventCategoriessController } from './event-categories/event-categoriess/event-categoriess.controller';
import { EventCategoriessModule } from './event-categories/event-categoriess/event-categoriess.module';
import { EventsService } from './events/events/events.service';
import { EventsModule } from './events/events/events.module';
import { TicketCategoriesModule } from './ticket-categories/ticket-categories/ticket-categories.module';
import { TicketsService } from './tickets/tickets/tickets.service';
import { TicketsModule } from './tickets/tickets/tickets.module';

@Module({
  imports: [VenuesModule, EventCategoriessModule, EventsModule, TicketCategoriesModule, TicketsModule],
  controllers: [AppController, EventCategoriessController],
  providers: [AppService, EventsService, TicketsService],
})
export class AppModule {}
