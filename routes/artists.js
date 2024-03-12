import { Router } from "express";
import * as controllers from "../controllers/artists.js";

const router = Router();

router.get("/", controllers.getArtists);
router.get("/id/:id", controllers.getArtistById);
router.get("/name/:name", controllers.getItemByName);
router.post("/", controllers.createItem);
router.put("/:id", controllers.updateItemById);
router.delete("/:id", controllers.deleteItemByMongoId);

export default router;
