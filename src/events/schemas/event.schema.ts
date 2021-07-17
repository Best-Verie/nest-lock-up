import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    venue: {type:mongoose.Schema.Types.ObjectId, ref:'venues'},
    eventCategory: {type:mongoose.Schema.Types.ObjectId, ref:'event-categories'},
    eventDate: Date,
    startTime: String,
    endTime: String,
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export interface IEvent extends mongoose.Document {
    title: string;
    description: string;
    venue: string;
    eventCategory:string;
    eventDate: Date;
    startTime: String;
    endTime: String;
    // createdBy: String;
    createdAt: Date;
    updatedAt: Date;
} 