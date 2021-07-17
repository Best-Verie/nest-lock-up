import { VenuesService } from './venues.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createVenue } from './DTO/createVenue';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  async getAllVenues(){
    return this.venuesService.findAllVenues();
  }

  @Post()
   async create(@Body() createVenueDto: createVenue):Promise<createVenue>{
    return this.venuesService.createVenue(createVenueDto);
  }

  @Get(':id')
  async findOne(@Param('id') id):Promise<createVenue>{
      return this.venuesService.findOneTask(id)
  }

  @Put()
  async update( @Param('id') id, @Body() createVenueDTO: createVenue):Promise<createVenue>{
    return this.venuesService.updateVenue(id, createVenueDTO);
  }

  @Delete(':id')
  async delete(@Param('id') id):Promise<createVenue>{
      return this.venuesService.deleteVenue(id);
  }
}
