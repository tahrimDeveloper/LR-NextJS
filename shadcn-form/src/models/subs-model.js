import mongoose, { Schema } from 'mongoose';

const SubscriberSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    type: Date,
    default: Date.now(),
  },
  unSubscribed: {
    required: true,
    type: Boolean,
    default: false,
  },
});

export const Subscriber =
  mongoose.models.Subscriber ?? mongoose.model('Subscriber', SubscriberSchema);
