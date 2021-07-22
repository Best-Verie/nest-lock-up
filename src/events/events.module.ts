import { venuesProvider } from './../venues/venues.provider';
import { DatabaseModule } from './../config/database/database.module';
import { EventsService } from './events.service';
import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { eventsProvider } from './event.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [EventsController],
  providers: [EventsService,...eventsProvider],
  exports:[...eventsProvider]
})
export class EventsModule {}
