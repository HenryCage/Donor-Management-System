import express from 'express'
import User from '../models/user.model.js'

export const getAllUsers = async (req, res) => {
  try {
    const staffs = await User.find({ role: { $ne: 'admin' }});
    
    res.status(200).json({ staffs });
  } catch (error) {
    console.log('Error in getting all users');
    return res.status(500).json({message: error.message})
  }
}

export const staffCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ count })
  } catch (error) {
    console.log("Error in counting staffs");
    return res.status(500).json({ message: error.message })
  }
}

export const getOneUser = async (req, res) => {
  try {
    const oneUser = await User.findById(req.params.id);
    return res.status(200).json(oneUser)
  } catch (error) {
    console.log('Error in getting single user');
    return res.status(500).json({msg: error.msg})
  }
}

