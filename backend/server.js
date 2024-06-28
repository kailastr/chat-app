//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
 
import connectToMongoDB from './db/dbConnect.js'
import authRoute from './routes/auth.routes.js';
import messageRoute from './routes/message.routes.js'

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser()); // to get datas from the cookies

// app.get('/', (req, res) => {
//     res.send("Server Index Route");
// });

app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute);

//http://localhost:5000
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running @ ${PORT}`);
});