import express, { Request, Response } from "express";
import initDB from "./config/db";
import configData from "./config";


const app = express(); 

const port = configData.port||6000;

initDB();
console.log(process.cwd());

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({
        success: true,
        message: 'basic test'
    })
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})