import { Module } from '@nestjs/common';
import { VenuesController } from './venues.controller';
import { VenuesService } from './venues.service';

@Module({
  providers: [VenuesService],
  controllers: [VenuesController],
})
export class VenuesModule {}
