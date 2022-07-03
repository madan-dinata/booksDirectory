import verify from './verifyToken.js';
import { getBook, getBookId, postBook, putBookId, deleteBookId } from '../controllers/index.controller.js';
import { register, login } from '../controllers/auth.controller.js';
import { Router } from 'express';
const router = Router();

// router book
router.get('/books', getBook);
router.get('/books/:id', getBookId);
router.post('/books', postBook);
router.put('/books/:id', putBookId);
router.delete('/books/:id', deleteBookId);

// router auth
router.post('/register', register);
router.post('/login', login);

export { router as server };
