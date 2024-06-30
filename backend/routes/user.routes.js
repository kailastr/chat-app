import Express from "express";

//middleware
import protectRoute from "../middleware/protectRoute.js";

//controller
import { getUserForSidebar } from "../controllers/user.controller.js";

const router = Express.Router();

router.get('/', protectRoute, getUserForSidebar);

export default router;