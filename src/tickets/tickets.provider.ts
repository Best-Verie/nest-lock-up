import { ticketSchema } from './schema/tickets.schema';
import { Connection } from 'mongoose';

export const ticketProvider  = [
    {
        provide: 'Ticket_MODEL',
        useFactory: (connection: Connection) => connection.model('tickets', ticketSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];