import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Auth from "../models/auth.model.js";
import User from '../models/user.model.js';

export const signup = async (req, res) => {
  const {firstname, lastname, date_of_birth, address, phone, email, password} = req.body;

  if (!firstname || !lastname || !date_of_birth || !address || !phone || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email})
    if (existingUser) {
      return res.status(400).json({ message: 'This User already exists' })
    }

    if (password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters'})
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      date_of_birth,
      address,
      phone,
      email,
      password: hashedPassword
    })

    const token = jwt.sign({userId: user._id}, 'secret', {expiresIn: '1h'})
    await Auth.create({
      userId: user._id,
      email,
      password
    })
    
  } catch (error) {
    
  }
}