import express from "express"
import { verifyToken } from "../middlewares/authMiddleware.js";
import { adminOnly } from "../middlewares/roleMiddleware.js";
import { getAllUsers, staffCount } from "../controllers/user.controller.js";
const router = express.Router();

router.get('/staffs', verifyToken, adminOnly, getAllUsers)
router.get('/staffs/count', staffCount)

export default router