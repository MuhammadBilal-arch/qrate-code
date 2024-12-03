import mongoose, { Schema, model, models } from 'mongoose';

// Define the User Schema
const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  photo: { type: String, default: ''},
  createdAt: { type: Date, default: Date.now },
});

// Create or retrieve the User model
const User = models.User || model('User', UserSchema);

export default User;
