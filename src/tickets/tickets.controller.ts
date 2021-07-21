import { createTicket } from './Dto/tickets.dto';
import { TicketsService } from './tickets.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('tickets')
@ApiTags('ticketCategories')
export class TicketsController {
    constructor(private readonly TicketsService:TicketsService){}
    
    @Get()
    async getAllTickets(){
        return this.TicketsService.getAllTickets();
    }

    @Post()
    async createTicket(@Body() createTicket:createTicket){
      return this.TicketsService.createtickets(createTicket);
    }
}
