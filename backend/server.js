//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

import connectToMongoDB from './db/dbConnect.js'
import authRoute from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)

// app.get('/', (req, res) => {
//     res.send("Server Index Route");
// });

app.use('/api/auth', authRoute);

//http://localhost:5000
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running @ ${PORT}`);
});