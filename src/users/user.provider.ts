import { UserSchema } from './schemas/user.schema';
import { Connection } from 'mongoose';

export const userProvider  = [
    {
        provide: 'User_MODEL',
        useFactory: (connection: Connection) => connection.model('users', UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];