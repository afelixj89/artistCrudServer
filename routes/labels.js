import { Router } from "express";
import * as controllers from "../controllers/labels.js";

const router = Router();

router.get("/", controllers.getAllItems);
router.get("/id/:id", controllers.getItemById);
router.get("/name/:name", controllers.getItemByName);

// create a new item
router.post("/", controllers.createItem);
// update existing item by id
router.put("/:id", controllers.updateItemById);
// delete item by the monogo id, xtra safety i guess
router.delete("/:id", controllers.deleteItemByMongoId);

export default router;
