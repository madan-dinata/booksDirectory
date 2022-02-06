import { getBook, getBookId, postBook, putBookId, deleteBookId } from "../controllers/index.controller.js";
import { Router } from "express";
const router = Router();

router.get("/books", getBook);
router.get("/books/:id", getBookId);
router.post("/books", postBook);
router.put("/books/:id", putBookId);
router.delete("/books/:id", deleteBookId);

export { router as server };
