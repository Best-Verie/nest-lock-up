import * as mongoose from 'mongoose';

export const venuesSchema = new mongoose.Schema({
  name: String,
  location: String,
});