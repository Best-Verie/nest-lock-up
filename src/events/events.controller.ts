import { getEvent } from './Dto/getEventDTo';
import { createEvent } from './Dto/createEvent';
import { Body, Controller, Get, Post } from '@nestjs/common';
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
    async createEventCategory(@Body() eventsDto: createEvent){
      return this.eventsService.createEvent(eventsDto);
    }

}
