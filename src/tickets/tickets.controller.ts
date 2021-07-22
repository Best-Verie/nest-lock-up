import { createTicket } from './Dto/tickets.dto';
import { TicketsService } from './tickets.service';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('tickets')
@ApiTags('tickets')
export class TicketsController {
    constructor(private readonly TicketsService:TicketsService){}
    
    @Get()
    async getAllTickets(){
        return this.TicketsService.getAllTickets();
    }

    @Post(':event_id')
    async createTicket(@Param('event_id') event_id:string, @Body() createTicket:createTicket){
      return this.TicketsService.createtickets(event_id, createTicket);
    }
}
