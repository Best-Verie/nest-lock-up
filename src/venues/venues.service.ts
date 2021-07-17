import { createVenue } from './DTO/createVenue';
import { Venue } from './interfaces/Venue.inteface';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class VenuesService {
 
  constructor(
    @Inject('Venue_MODEL')
    private venueModel: Model<Venue>,
  ) {}

  private readonly venues: Venue[] = [];

  async createVenue(createVenueDto: createVenue): Promise<Venue> {
    const createdVenue = new this.venueModel(createVenueDto);
    return createdVenue.save();
  }

  async findAllVenues(): Promise<Venue[]> {
    return this.venueModel.find().exec();
  }
  async findOneTask(id:string):Promise<Venue>{
    return await this.venueModel.findOne({_id:id});
  }

  async updateVenue(id:string, venue:Venue): Promise<Venue>{
    return await this.venueModel.findByIdAndUpdate(id,venue, {new:true})
  }

  async deleteVenue(id:string):Promise<Venue>{
    return await this.venueModel.findByIdAndRemove(id);
  }
}
