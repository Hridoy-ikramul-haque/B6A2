import { Request, Response } from "express";
import { authServices } from "./auth.service";


const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await authServices.signIn({ email, password });
        console.log(result);
        if (result == null) {
            res.status(200).json({
                success: false,
                message: "Login unSuccessful",
                data: result
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Login Successful",
                data: result
            })
        }
        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
};


export const authController = {
    login
}
