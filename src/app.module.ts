import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VenuesController } from './venues/venues/venues.controller';
import { VenuesModule } from './venues/venues/venues.module';

@Module({
  imports: [VenuesModule],
  controllers: [AppController, VenuesController],
  providers: [AppService],
})
export class AppModule {}
