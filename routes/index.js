import { Router } from "express";
import iconicRoutes from "./iconic.js";
import top10Routes from "./top10.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", iconicRoutes);
router.use("/", top10Routes);


export default router;
