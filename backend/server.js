import express from 'express';
import dotenv from 'dotenv';
import connectDB from './dbConnect.js';
dotenv.config();
const port = process.env.PORT


const app = express()
app.use(express.json())

connectDB();

app.listen(port, () => {
  console.log('Server is Running on port ' + port)
})

