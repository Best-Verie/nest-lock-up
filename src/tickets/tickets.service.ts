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
        const createdtickets = new this.ticketsModel(createticketsDto);
        return createdtickets.save();
  }
    
    
  async getAllTickets(){
        return this.ticketsModel.find().populate('user').exec();
  }

}
