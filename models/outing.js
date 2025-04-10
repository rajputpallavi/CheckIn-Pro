// models/outing.js
import mongoose from 'mongoose';

const outingSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  outDate: { type: Date, required: true },
  outTime: { type: String, required: true },
  inDate: { type: Date, required: true },
  inTime: { type: String, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
});

export default mongoose.model('Outing', outingSchema);