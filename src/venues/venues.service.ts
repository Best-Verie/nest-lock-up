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
}
