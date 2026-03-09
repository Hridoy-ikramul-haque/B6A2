import express from 'express';
import { vehicleController } from './vehicle.controller';
const router = express.Router();

router.post('/vehicles', vehicleController.create_vehicles);
router.get('/vehicles', vehicleController.show_allVehicle);
router.get('/vehicles/:vehicleId', vehicleController.show_vehicle)

export const vehicleroute = router;