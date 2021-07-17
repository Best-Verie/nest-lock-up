import { EventSchema } from './schemas/event.schema';
import { Connection } from 'mongoose';

export const eventsProvider  = [
    {
        provide: 'Event_MODEL',
        useFactory: (connection: Connection) => connection.model('events', EventSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];