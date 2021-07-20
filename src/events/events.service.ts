import { createEvent } from './Dto/createEvent';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EventsInterface } from './interfaces/events.interface';

@Injectable()
export class EventsService {
    constructor( @Inject('Event_MODEL')
    private eventsModel: Model<EventsInterface>,
){}

async createEvent(createEventDto: createEvent): Promise<createEvent> {
    const createdEvent = new this.eventsModel(createEventDto);
    return createdEvent.save();
  }


async getAllEvents(){
    return this.eventsModel.find().populate('venue').populate('eventCategory').exec();
}

async findEventByTitle(title:string){
    return this.eventsModel.find({title}).populate('venue').populate('eventCategory').exec();
}

async findEventByCategory(eventCategory:string){
    return this.eventsModel.find({eventCategory}).populate('venue').populate('eventCategory').exec()
}

async findEventByVenue(venue:string){
    return this.eventsModel.find({venue}).populate('venue').populate('eventCategory').exec()
}


}