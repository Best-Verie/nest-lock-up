import { TicketCategoryDto } from './Dto/createTicketCategory';
import { TicketCategoriesService } from './ticket-categories.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('ticket-categories')
@ApiTags('ticketCategories')
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
      
    @Put(':id')
    async update( @Param('id') id, @Body() TicketCategoryDto: TicketCategoryDto):Promise<TicketCategoryDto>{
      return this.ticketCategoriesService.updateTicketCategory(id, TicketCategoryDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id):Promise<TicketCategoryDto>{
        return this.ticketCategoriesService.deleteTicketCategory(id);
    }
}
