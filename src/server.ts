import express, { Request, Response } from "express";
import initDB from "./config/db";
import configData from "./config";
import { pool } from "./config/db";


const app = express();
app.use(express.json());
const port = configData.port || 6000;

initDB();
console.log(process.cwd());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        success: true,
        message: 'basic test'
    })
});

// Create User
app.post('/api/v1/auth/signup', async (req: Request, res: Response) => {
    try {
        const { name, email, password, phone, role } = req.body;
        console.log(email);
        const result = await pool.query(`INSERT INTO users(name,email,password,phone,role) VALUES($1,$2,$3,$4,$5) RETURNING *`, [name, email, password, phone, role]);
        console.log(result);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: result.rows
        })
    } catch (err: any) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Login Unsuccessful"
        })
    }
})


// Create Vehicle 
app.post('/api/v1/vehicles', async (req: Request, res: Response) => {
    try {
        const { vehicle_name, type, registration_number, daily_rent_price, availability_status } = req.body;
        const result = await pool.query(`INSERT INTO vehicles(vehicle_name, type, registration_number, daily_rent_price, availability_status) VALUES($1,$2,$3,$4,$5) RETURNING *`, [vehicle_name, type, registration_number, daily_rent_price, availability_status])
        res.status(201).json({
            success: true,
            message: "Vehicle created successfully",
            data: result.rows
        })
    }
    catch (err: any) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Unsuccessful"
        })
    }
})


// View all vehicle 
app.get('/api/v1/vehicles', async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`SELECT * FROM vehicles`);
        if (result.rows.length == 0) {
            res.status(200).json({
                success: true,
                message: "No vehicles found",
                data: result.rows
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: "Vehicle retrieved successfully",
                data: result.rows
            })
        }

    } catch (error: any) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error
        })
    }
})

app.get('/api/v1/vehicles/:vehicleId', (req: Request, res: Response) => {
    try {

    } catch (err) {

    }
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})