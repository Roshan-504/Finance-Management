import express from "express";
import { checkAuth, login, logout, signup } from "../controllers/auth.js";
import { protectRoute } from "../middleware/authCheck.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.get("/check",protectRoute,checkAuth)

export default router;