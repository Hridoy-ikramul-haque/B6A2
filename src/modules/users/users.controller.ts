import { Request, Response } from "express";
import { userServices } from "./users.service";



const signUp = async (req: Request, res: Response) => {
    try {
        const result = await userServices.signUp(req.body);
        res.status(201).json({
            success: true,
            message: "Data inserted successfully",
            data: result.rows
        })

    } catch (err: any) {
        res.status(500).json({ success: false, message: err.message });
    }
}



const login = async (req: Request, res: Response) => {
    try {
        const result = await userServices.login(req.body);
        console.log(req.body);
        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result.rows
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}



const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userServices.getAllUser();
        res.status(201).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            error: err.message
        })
    }
}



export const userController = {
    signUp,
    getAllUser,
    login
}