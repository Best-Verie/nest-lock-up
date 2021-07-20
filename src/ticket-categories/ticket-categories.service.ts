import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TicketCategoriesInterface } from './interfaces/ticket.categories';

@Injectable()
export class TicketCategoriesService {
    constructor( @Inject('TicketCategories_MODEL')
    private ticketCategoriesModel: Model<TicketCategoriesInterface>,
){}
}
