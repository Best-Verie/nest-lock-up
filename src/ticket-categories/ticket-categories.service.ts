import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TicketCategoryDto } from './Dto/createTicketCategory';
import { TicketCategoriesInterface } from './interfaces/ticket.categories';

@Injectable()
export class TicketCategoriesService {
    constructor( @Inject('TicketCategories_MODEL')
    private ticketCategoriesModel: Model<TicketCategoriesInterface>,
){}

async createTicketCategory(createTicketCategoryDto: TicketCategoryDto): Promise<TicketCategoryDto> {
    const createdTicketCategory = new this.ticketCategoriesModel(createTicketCategoryDto);
    return createdTicketCategory.save();
  }


async getAllTicketCategories(){
    return this.ticketCategoriesModel.find();
}
}
