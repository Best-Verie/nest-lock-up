import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';
import { VenuesController } from './venues.controller';
import { venuesProvider } from './venues.provider';
import { VenuesService } from './venues.service';

@Module({
  imports:[DatabaseModule],
  providers: [VenuesService, ...venuesProvider],
  controllers: [VenuesController],
})
export class VenuesModule {}
