import {Router} from "express";
import {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
} from "../controllers/books.ts";
import {validateBook} from "../middlewares/validation.middleware.ts";
import {authMiddleware} from "../middlewares/auth.middleware.ts";
import {randomColorMiddleware} from "../middlewares/randomColor.ts";

const router = Router();

router.get("/", randomColorMiddleware, getBooks);
router.get("/:id", randomColorMiddleware, getBookById);
router.post("/", authMiddleware, validateBook, createBook);
router.put("/:id", authMiddleware, updateBook);
router.delete("/:id", authMiddleware, deleteBook);

export {router};