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



    async createtickets(createticketsDto: createTicket){
        const event = await this.eventsModel.findOne({ event: createticketsDto.event }).populate('venue').populate('eventCategory').populate('tickets').exec();
    
        var createdtickets = new this.ticketsModel(createticketsDto).populate('event').populate('issuedTo').populate('ticket').execPopulate();
        var preferedCategory = (await createdtickets).preferredTicketCategory;


        for(var i=0;i<event.tickets.length;i++){
            var eventsAvailableTicketCategories = await this.ticketCategoriesModel.findOne({'_id':event.tickets[i]});

            if(eventsAvailableTicketCategories.categoryName==preferedCategory){

                for(var j=0; j<eventsAvailableTicketCategories.numberofAvailableTickets;j++){

                    var ticketNo=j++;
                    var amountToBePaid = eventsAvailableTicketCategories.categoryPrice;
                    var paidAmount = (await createdtickets).amountPaid;
                    if(paidAmount<amountToBePaid){
                        throw new Error('You have not enough money to pay for this ticket');
                    }else{
                        var ticket = new this.ticketsModel({
                            ticketNo:ticketNo,
                            event: event._id,
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
        return this.ticketsModel.find().populate('event').populate('user').exec();
  }

}
