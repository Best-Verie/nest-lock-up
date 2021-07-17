import { EventCategoriesDto } from './Dto/event.categories.dto';
import { EventCategoriesInterface } from './intefaces/event-category.inteface';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class EventCategoriessService {
    constructor( @Inject('EventCategories_Model')
    private eventCategoriesModel: Model<EventCategoriesInterface>,
){}

 async createEventCategory(createEventCategoryDto: EventCategoriesDto): Promise<EventCategoriesDto> {
    const createdEventCategory = new this.eventCategoriesModel(createEventCategoryDto);
    return createdEventCategory.save();
  }


async getAllEventCategories(){
    return this.eventCategoriesModel.find();
}

}