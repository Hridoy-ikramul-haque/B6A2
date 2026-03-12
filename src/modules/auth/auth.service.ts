import { pool } from "../../config/db"
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import configData from "../../config";


const signIn = async (payload: Record<string, any>) => {
    const { email, password } = payload;
    const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [email]);
    // console.log(result);
    if (result.rows.length === 0) return null;
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(isMatch);
    if (!isMatch) return null;
    const token = jwt.sign({ name: user.name, email: user.email }, configData.jwtSecret as string, { expiresIn: "1d" });
    return { token, user };
}




export const authServices = {
    signIn
}