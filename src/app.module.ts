import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenuesModule } from './venues/venues.module';
import { EventCategoriessModule } from './event-categories/event-categoriess/event-categoriess.module';
import { EventsModule } from './events/events.module';
import { TicketCategoriesModule } from './ticket-categories/ticket-categories/ticket-categories.module';
import { TicketsModule } from './tickets/tickets.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [VenuesModule, EventCategoriessModule, EventsModule, TicketCategoriesModule, TicketsModule, DatabaseModule],
})
export class AppModule {}
