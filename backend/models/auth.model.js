import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, "Password nust be more than 7 characters"]
  }
}, {timestamps: true})

const Auth = mongoose.model('Auth', authSchema)
export default Auth