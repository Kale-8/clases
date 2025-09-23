import type {Request, Response, NextFunction} from "express";

export function validateBook(req: Request, res: Response, next: NextFunction) {
    if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({
            error: "Request body must be a valid JSON object",
        });
    }
    const {title, author} = req.body;
    if (!title || !author) {
        return res.status(400).json({
            error: "Both 'title' and 'author' are required fields",
        });
    }
    next();
}