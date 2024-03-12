import { Router } from "express";
import * as controllers from "../controllers/releases.js";

const router = Router();

router.get("/", controllers.getAllItems);
router.get("/id/:id", controllers.getItemById);
router.get("/name/:title", controllers.getItemByTitle);
router.post("/", controllers.createItem);
router.put("/:id", controllers.updateItemById);
router.delete("/:id", controllers.deleteItemByMongoId);

export default router;
