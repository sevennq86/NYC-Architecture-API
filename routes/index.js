import { Router } from "express";
import iconicRoutes from "./iconic.js";
import top10Routes from "./top10.js";
import usersRoutes from "./user.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", iconicRoutes);
router.use("/", top10Routes);
router.use("/", usersRoutes);

export default router;
