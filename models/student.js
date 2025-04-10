// models/student.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  registerNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  hostel: { type: String },
  roomType: { type: String, enum: ['single', 'double', '3seater', '4seater'] },
  ac: { type: Boolean },
  feesPaid: { type: Number, default: 0 },
  finePaid: { type: Number, default: 0 },
  complaints: [{ type: String }],
  outingRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Outing' }]
});

export default mongoose.model('Student', studentSchema);