import verify from "./verifyToken.js";
import { getBook, getBookId, postBook, putBookId, deleteBookId } from "../controllers/index.controller.js";
import { register, login } from "../controllers/auth.controller.js";
import { Router } from "express";
const router = Router();

// router book
router.get("/books", verify, getBook);
router.get("/books/:id", verify, getBookId);
router.post("/books", verify, postBook);
router.put("/books/:id", verify, putBookId);
router.delete("/books/:id", verify, deleteBookId);

// router auth
router.post("/register", register);
router.post("/login", login);

// Posts

router.get("/posts", verify, (req, res) => {
  res.json({
    posts: {
      title: "My First Posts",
      description: "Random data you should not acces",
    },
  });
});

export { router as server };
