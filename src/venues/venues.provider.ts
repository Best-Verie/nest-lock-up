import { venuesSchema } from './schemas/venues.schema';
import { Connection } from 'mongoose';

export const venuesProvider = [
  {
    provide: 'Venue_MODEL',
    useFactory: (connection: Connection) => connection.model('venues', venuesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];