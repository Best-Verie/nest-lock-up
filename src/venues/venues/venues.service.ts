import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {
  getVenues(): string {
        return 'find my venues here!';
      }
}
