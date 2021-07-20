import { TicketCategoriesSchema } from './schema/ticket.categories.schema';
import { Connection } from 'mongoose';

export const ticketCategoriesProvider  = [
    {
        provide: 'TicketCategories_MODEL',
        useFactory: (connection: Connection) => connection.model('ticket-categories', TicketCategoriesSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];