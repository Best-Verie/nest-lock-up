import { Module } from '@nestjs/common';
import { EventCategoriessService } from './event-categoriess.service';

@Module({
  providers: [EventCategoriessService]
})
export class EventCategoriessModule {}
