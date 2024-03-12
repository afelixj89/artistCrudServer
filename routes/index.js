import { Router } from "express";
import artistsRoutes from "./artists.js";
import releasesRoutes from "./releases.js";
import labelsRoutes from "./labels.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/artists", artistsRoutes);
router.use("/releases", releasesRoutes);
router.use("/labels", labelsRoutes);



export default router;
