import { Request, Response } from "express";
import { vehicleServices } from "./vehicle.service";
import { Result } from "pg";






const create_vehicles = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.create_vehicledb(req.body);
        res.status(201).json({
            success: true,
            message: 'Vehicle created successfully',
            data: result.rows
        })
    } catch (err: any) {
        res.status(501).json({
            succes: false,
            message: err.message
        })
    }
};


const show_allVehicle = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.show_allvehicledb();
        if (result.rows.length === 0) {
            res.status(200).json({
                success: true,
                message: "No vehicle found...",
                data: result.rows
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Vehicle retrieved successfully",
                data: result.rows
            })
        }
    } catch (err: any) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
};


const show_vehicle = async (req: Request, res: Response) => {
    try {
        const result = await vehicleServices.show_vehicledb(req.params.vehicleId as string)
        if (result.rows.length === 0) {
            res.status(200).json({
                success: false,
                message: "Wrong ID or no vehicles available",
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Vehicle retrieved successfully",
                data: result.rows[0]
            })
        }

        // console.log(result.rows);
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}


export const vehicleController = {
    create_vehicles,
    show_allVehicle,
    show_vehicle
}