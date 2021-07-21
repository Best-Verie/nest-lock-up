import * as mongoose from 'mongoose';

export const TicketCategoriesSchema = new mongoose.Schema({
    eventId:{ type: mongoose.Schema.Types.ObjectId, ref: 'events' },
    categoryName: String,
    categoryPrice:String,
    numberofAvailableTickets:Number,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
