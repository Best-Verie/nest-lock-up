import { EventCategoriesDto } from './Dto/event.categories.dto';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EventCategoriessService } from './event-categoriess.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('event-categories')
@ApiTags('event-categories')
export class EventCategoriessController {
    constructor(private readonly eventCategoriesService: EventCategoriessService) {}

  
    @Get()
    async getAllEventCategories(){
        return this.eventCategoriesService.getAllEventCategories();
    }

    @Post()
    async createEventCategory(@Body() EventCategoriesDto:EventCategoriesDto){
      return this.eventCategoriesService.createEventCategory(EventCategoriesDto);
    }

    
    @Put(':id')
    async update( @Param('id') id, @Body() EventCategoriesDto: EventCategoriesDto):Promise<EventCategoriesDto>{
      return this.eventCategoriesService.updateEventCategory(id, EventCategoriesDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id):Promise<EventCategoriesDto>{
        return this.eventCategoriesService.deleteEventCategory(id);
    }
}
