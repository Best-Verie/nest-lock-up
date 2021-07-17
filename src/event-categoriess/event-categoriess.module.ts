import { EventCategoriessController } from './event-categoriess.controller';
import { Module } from '@nestjs/common';
import { EventCategoriessService } from './event-categoriess.service';

@Module({
  providers: [EventCategoriessService],
  controllers:[EventCategoriessController]
})
export class EventCategoriessModule {}
