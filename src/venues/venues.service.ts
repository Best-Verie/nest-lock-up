import { Venue } from './interfaces/Venue.inteface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {
 
  private readonly venues: Venue[] = [];

  create(venue: Venue) {
    this.venues.push(venue);
    return this.venues;
  }
  getVenues(){
    return this.venues;
  }
}
