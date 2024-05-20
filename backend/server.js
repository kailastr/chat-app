//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';

import authRoute from './routes/auth.routes.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello World, welcome to our page");
});

app.use('/api/auth', authRoute);

//http://localhost:5000
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));