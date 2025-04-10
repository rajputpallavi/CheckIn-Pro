// models/warden.js
import mongoose from 'mongoose';

const wardenSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model('Warden', wardenSchema);