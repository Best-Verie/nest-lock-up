import { VenuesService } from './venues.service';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  getVenues(): string {
    return this.venuesService.getVenues();
  }
}
