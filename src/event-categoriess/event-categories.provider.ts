import { eventCategoriesSchema } from './schemas/event.category.schema';
import { Connection } from 'mongoose';

export const eventCategpriesProvider = [
  {
    provide: 'EventCategories_Model',
    useFactory: (connection: Connection) => connection.model('event_categories', eventCategoriesSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];