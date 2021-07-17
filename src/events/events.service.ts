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
    return this.eventsModel.find().populate('venue');
}
}
