import { TicketCategoryDto } from './Dto/createTicketCategory';
import { TicketCategoriesService } from './ticket-categories.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('ticket-categories')
@ApiTags('ticket-categories')
export class TicketCategoriesController {
    constructor(private readonly ticketCategoriesService:TicketCategoriesService){}
    
    @Get()
    async getAllEventCategories(){
        return this.ticketCategoriesService.getAllTicketCategories();
    }

    @Post()
    async createEventCategory(@Body() TicketCategoryDto:TicketCategoryDto){
      return this.ticketCategoriesService.createTicketCategory(TicketCategoryDto);
    }
}
