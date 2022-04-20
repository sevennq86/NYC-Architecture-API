import { Router } from "express";
import * as controllers from "../controllers/users.js";

const router = Router();

router.post("/signup", controllers.signUp);
router.post("/login", controllers.logIn);

// router.delete("/logout")

export default router;