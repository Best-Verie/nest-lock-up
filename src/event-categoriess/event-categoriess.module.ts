import { DatabaseModule } from './../config/database/database.module';
import { EventCategoriessController } from './event-categoriess.controller';
import { Module } from '@nestjs/common';
import { EventCategoriessService } from './event-categoriess.service';
import { eventCategoriesProvider } from './event-categories.provider';

@Module({
  imports:[DatabaseModule],
  providers: [EventCategoriessService, ...eventCategoriesProvider],
  controllers:[EventCategoriessController]
})
export class EventCategoriessModule {}
