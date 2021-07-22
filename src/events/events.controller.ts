import { getEvent } from './Dto/getEventDTo';
import { createEvent } from './Dto/createEvent';
import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { EventsService } from './events.service';

@Controller('events')
@ApiTags('events')
export class EventsController {
    constructor(
        private readonly eventsService: EventsService
    ) {}
    
    @Get()
    @ApiOkResponse({
        type: getEvent,
        description:'All events'
      })
    async getAllevents(){
        return this.eventsService.getAllEvents();
    }

    @Post()
    @ApiOkResponse({
        type: createEvent,
        description:'create events'
      })
    async createEvent(@Body() eventsDto: createEvent){
      return this.eventsService.createEvent(eventsDto);
    }

    @Get(':id')
    async findOne(@Param('id') id):Promise<createEvent>{
        return this.eventsService.findEventById(id)
    }

    @Get('filterByVenues/:venue')
    async filterByVenue(@Param('venue') venue: string){
      return this.eventsService.findEventByVenue(venue);
    }

    @Get('filterByTitle/:title')
    async filterByTitle(@Param('title') title:string){
      return this.eventsService.findEventByTitle(title);
    }

 
    @Put(':id')
    async update( @Param('id') id, @Body() createEvent: createEvent):Promise<createEvent>{
      return this.eventsService.updateEvent(id, createEvent);
    }
  
    @Delete(':id')
    async delete(@Param('id') id):Promise<createEvent>{
        return this.eventsService.deleteEvent(id);
    }


}
