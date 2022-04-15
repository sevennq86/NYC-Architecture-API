import { Router } from "express";
import * as controllers from "../controllers/iconic.js";

const router = Router();

router.get("/iconic", controllers.getIconic);
router.get("/iconic/:id", controllers.getIconic);
router.post("/iconic", controllers.createIconic);
router.put("/iconic/:id", controllers.updateIconic);
router.delete("/iconic/:id", controllers.deleteIconic);

export default router;