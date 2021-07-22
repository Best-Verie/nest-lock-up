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
    const createdEvent = new this.eventsModel(createEventDto).populate('venue').populate('eventCategory').populate('tickets').execPopulate();
    return  (await createdEvent).save();
  }


async getAllEvents(){
    return this.eventsModel.find().populate('venue').populate('eventCategory').populate('tickets').exec();
}

async findEventByTitle(title:string){
    return this.eventsModel.find({'title':title});
}

async findEventByCategory(eventCategory:string){
    return this.eventsModel.find({eventCategory}).populate('venue').populate('eventCategory').populate('tickets').exec()
}

async findEventById(id:string){
return  await this.eventsModel.findOne({id}).populate('venue').populate('eventCategory').populate('tickets').exec();

}


// async findEventByVenue(venueName:string){
//     return this.eventsModel.find({'venue.name':venueName}).populate('venue').populate('eventCategory').exec()
// }


async findEventByVenue(venueName:string){
    return this.eventsModel.find().
    populate({
      path: 'venue',
      match: { name: venueName },
     select: 'name - _id'
    }).
    exec()
}


async updateEvent(id:string, Event:createEvent): Promise<createEvent>{
    return await this.eventsModel.findByIdAndUpdate(id,Event, {new:true})
  }

  async deleteEvent(id:string):Promise<createEvent>{
    return await this.eventsModel.findByIdAndRemove(id);
  }


}