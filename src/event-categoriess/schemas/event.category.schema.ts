import * as mongoose from 'mongoose';
export const eventCategoriesSchema =  new mongoose.Schema({
    eventId:String,
    category_name:String
}
)