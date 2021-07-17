import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    venue: {type:mongoose.SchemaTypes.ObjectId, ref:'venues'},
    eventCategory: {type:mongoose.SchemaTypes.ObjectId, ref:'event-categories'},
    eventDate: Date,
    startTime: Date,
    endTime: Date,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export interface IEvent extends mongoose.Document {
    title: string;
    description: string;
    venue: string;
    eventCategory:string;
    eventDate: Date;
    startTime: Date;
    endTime: Date;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
} 