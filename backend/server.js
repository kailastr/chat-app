//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//import express app from socket.io
import { app, server } from './socket/socket.js';

//DB import
import connectToMongoDB from './db/dbConnect.js'

//route import
import authRoute from './routes/auth.routes.js';
import messageRoute from './routes/message.routes.js'
import userRoute from './routes/user.routes.js'

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser()); // to get datas from the cookies

// app.get('/', (req, res) => {
//     res.send("Server Index Route");
// });

app.use('/api/auth', authRoute);
app.use('/api/messages', messageRoute);
app.use('/api/users', userRoute);

//http://localhost:5000
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running @ ${PORT}`);
});