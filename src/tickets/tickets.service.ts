import { createTicket } from './Dto/tickets.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TicketsInterface } from './interfaces/tickets.interface';

@Injectable()
export class TicketsService {
    constructor( @Inject('Ticket_MODEL')
    private ticketsModel: Model<TicketsInterface>,
){}

    async createtickets(createticketsDto: createTicket): Promise<createTicket> {
        var createdtickets = new this.ticketsModel(createticketsDto).populate('event').execPopulate();
        // const ticketCategories = createticketsDto.event.
        // for(int i=0; i<
        console.log(createdtickets);
        // return createdtickets.save();
        return null;
  }
    
    
  async getAllTickets(){
        return this.ticketsModel.find().populate('user').exec();
  }

}
