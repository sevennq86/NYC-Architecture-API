import { Router } from "express";
import * as controllers from "../controllers/top10.js";

const router = Router();

router.get("/top10", controllers.getTop10);
router.get("/top10/:id", controllers.getTop10);
router.post("/top10", controllers.createTop10);
router.put("/top10/:id", controllers.updateTop10);
router.delete("/top10/:id", controllers.deleteTop10);

export default router;