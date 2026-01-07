import express from 'express';
import dotenv from 'dotenv';
import connectDB from './dbConnect.js';
import authroutes from './routes/authRoute.js';
dotenv.config();
const port = process.env.PORT

const app = express()
app.use(express.json())

connectDB();

import cors from 'cors'

const allowedOrigins = ['http://localhost:5173', 'https://donor-management-system.vercel.app'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}))

app.use('/auth', authroutes);


app.listen(port, () => {
  console.log('Server is Running on port ' + port)
})

