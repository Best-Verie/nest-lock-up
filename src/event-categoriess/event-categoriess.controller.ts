import { EventCategoriesDto } from './Dto/event.categories.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
