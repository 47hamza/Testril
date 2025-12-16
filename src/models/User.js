import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  telstraUsername: {
    type: String,
    required: true,
  },
  telstrapassword: {
    type: String,
    default: null,
  },
  gmailUsername: {
    type: String,
    default: null,
  },
  gmailPassword: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;

