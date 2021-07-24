import {
  EventCategoriesDto
} from './Dto/event.categories.dto';
import {
  EventCategoriesInterface
} from './intefaces/event-category.inteface';
import {
  Inject,
  Injectable
} from '@nestjs/common';
import {
  Model
} from 'mongoose';

@Injectable()
export class EventCategoriessService {
  constructor(@Inject('EventCategories_Model') private eventCategoriesModel: Model < EventCategoriesInterface > , ) {}

  async createEventCategory(createEventCategoryDto: EventCategoriesDto): Promise < EventCategoriesDto > {
    const foundEventCategory = await (await this.eventCategoriesModel.findOne({
      'name': EventCategoriesDto.name
    })).execPopulate();

    if (foundEventCategory) {
      throw new Error("Cant save the same event category twice! (same title)");
    }
    const createdEventCategory = new this.eventCategoriesModel(createEventCategoryDto);
    return createdEventCategory.save();
  }


  async getAllEventCategories() {
    return this.eventCategoriesModel.find();
  }
  async updateEventCategory(id: string, EventCategoryDto: EventCategoriesDto): Promise < EventCategoriesDto > {
    return await this.eventCategoriesModel.findByIdAndUpdate(id, EventCategoryDto, {
      new: true
    })
  }

  async deleteEventCategory(id: string): Promise < EventCategoriesDto > {
    return await this.eventCategoriesModel.findByIdAndRemove(id);
  }
}