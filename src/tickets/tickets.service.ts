import { EventsInterface } from './../events/interfaces/events.interface';
import { createTicket } from './Dto/tickets.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TicketsInterface } from './interfaces/tickets.interface';

@Injectable()
export class TicketsService {
    constructor( @Inject('Ticket_MODEL')
    private ticketsModel: Model<TicketsInterface>,
    @Inject('Event_MODEL')
    private eventsModel: Model<EventsInterface>,
    
){}



    async createtickets(createticketsDto: createTicket): Promise<createTicket> {
        const event = await this.eventsModel.findOne({ event: createticketsDto.event }).populate('venue').populate('eventCategory').populate('tickets').exec();
    
        var createdtickets = new this.ticketsModel(createticketsDto).populate('event').populate('issuedTo').populate('ticket').execPopulate();
        var preferedCategory = (await createdtickets).preferredTicketCategory;

        // var preferesCategoryId =

        // var availableTicketCategories;
        // for(var i=0;i<event.tickets.length;i++){
        //     if(event.tickets[i]==preferedCategory){
        //         availableTicketCategories.push(event.tickets[i].ticketCategory);
        //     }
        // }
        // // if(preferedCategory==)
        // const ticketCategories = event.tickets.map(ticket => ticket.ticketCategory);
        // // for(int i=0; i<
        // console.log(createdtickets);
        return (await createdtickets).save();
        // return null;
  }
    
    
  async getAllTickets(){
        return this.ticketsModel.find().populate('event').populate('user').exec();
  }

}
