import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    venue: {type:mongoose.Schema.Types.ObjectId, ref:'venues'},
    eventCategory: {type:mongoose.Schema.Types.ObjectId, ref:'event_categories'},
    tickets:{type:mongoose.Schema.Types.ObjectId, ref:'tiket-categories'},
    eventDate: Date,
    startTime: String,
    endTime: String,
    // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
