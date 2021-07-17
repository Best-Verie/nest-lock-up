import { Connection } from 'mongoose';

var  User = require('./schemas/user.schema');
export const userProvider  = [
    {
        provide: 'User_MODEL',
        useFactory: (connection: Connection) => connection.model('users', User),
        inject: ['DATABASE_CONNECTION'],
    },
];