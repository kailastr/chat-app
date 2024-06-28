import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.post('/send/:id', protectRoute, sendMessage); //adding a middleware function to ensure that the route is verified

export default router;