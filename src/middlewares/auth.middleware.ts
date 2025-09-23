import type {Request, Response, NextFunction} from "express";

const VALID_TOKEN = "12345";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({message: "Unauthorized: Missing or invalid token"});
    }
    const token = authHeader.split(" ").pop();
    if (token !== VALID_TOKEN) {
        return res.status(401).json({message: "Unauthorized: Invalid token"});
    }
    next();
}