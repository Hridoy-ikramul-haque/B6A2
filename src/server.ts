import express, { Request, Response } from "express";
import initDB from "./config/db";
import configData from "./config";
import { pool } from "./config/db";
import { userRoutes } from "./modules/users/users.routes";
import { vehicleroute } from "./modules/vehicles/vehicle.routes";


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



// routes-> controller->business Logic 
app.use('/api/v1', userRoutes);
app.use('/api/v1', vehicleroute);






app.listen(port, () => {
    console.log(`Server running at ${port}`);
})