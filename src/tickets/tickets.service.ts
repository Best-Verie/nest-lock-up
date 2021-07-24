import { EventsInterface } from './../events/interfaces/events.interface';
import { createTicket } from './Dto/tickets.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TicketsInterface } from './interfaces/tickets.interface';
import { TicketCategoriesInterface } from 'src/ticket-categories/interfaces/ticket.categories';

@Injectable()
export class TicketsService {
    constructor( @Inject('Ticket_MODEL')
    private ticketsModel: Model<TicketsInterface>,
    @Inject('Event_MODEL')
    private eventsModel: Model<EventsInterface>,
    @Inject('TicketCategories_MODEL')
    private ticketCategoriesModel: Model<TicketCategoriesInterface>
    
){}

async getrelatedEvents(id:string){
    return await this.eventsModel.findOne({'_id':id}).populate('venue').populate('eventCategory').populate('tickets').exec();
}

    async createtickets(event_id:string, createticketsDto: createTicket){
        const event = this.getrelatedEvents(event_id);
    
        var preferedCategory = createticketsDto.preferredTicketCategory;


        for(var i=0;i<(await event).tickets.length;i++){
            var eventsAvailableTicketCategories = await this.ticketCategoriesModel.findOne({'_id':(await event).tickets[i]});

            if(eventsAvailableTicketCategories.categoryName==preferedCategory){

                for(var j=0; j<eventsAvailableTicketCategories.numberofAvailableTickets;j++){

                    var ticketNo=j++;
                    var amountToBePaid = eventsAvailableTicketCategories.categoryPrice;
                    var paidAmount = createticketsDto.amountPaid;
                    if(paidAmount<amountToBePaid){
                        throw new Error('You have not enough money to pay for this ticket');
                    }else{
                        var ticket = new this.ticketsModel({
                            ticketNo:ticketNo,
                            amountPaid:paidAmount,
                            preferredTicketCategory: eventsAvailableTicketCategories.categoryName,
                            issuedTo: createticketsDto.issuedTo,
                        });
                        await ticket.save();
                    }
                }
            }
            else{
                throw new Error('The ticket caegory you chose does not exist');
            }

        }

  }
    
    
  async getAllTickets(){
        return this.ticketsModel.find().populate('event').populate('issuedTo').exec();
  }

}
