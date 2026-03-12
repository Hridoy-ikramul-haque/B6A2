import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken';
import configData from "../config";



const auth = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        // console.log({ authToken: token });
        if (!token) return res.status(500).json({ message: "You are not allowed" });
        const decoded = jwt.verify(token, configData.jwtSecret as string);
        console.log(decoded);
        next();
    }
}

export default auth;