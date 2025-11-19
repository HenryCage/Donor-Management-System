import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  date_of_birth: {
    type: Date,
    required: true
  },
  address: String,
  phone: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema)
export default User