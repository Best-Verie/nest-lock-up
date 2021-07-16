import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {
  getVenues(): string {
    return 'Hello World these aew my venues!';
  }
}
