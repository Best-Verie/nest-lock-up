import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';

@Module({
  providers: [VenuesService],
})
export class VenuesModule {}
