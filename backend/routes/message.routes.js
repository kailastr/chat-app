import express from 'express';
import { getMessages, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

//route for sending messages
router.post('/send/:id', protectRoute, sendMessage); //adding a middleware function to ensure that the route is verified

//route for getting messages
router.get('/:id', protectRoute, getMessages);

export default router;