import { VenuesService } from './venues.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { createVenue } from './DTO/createVenue';

@Controller()
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  async getAllVenues(){
    return this.venuesService.getVenues();
  }

  @Post()
   async create(@Body() createVenueDto: createVenue) {
    this.venuesService.create(createVenueDto);
  }
}
