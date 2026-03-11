import { pool } from "../../config/db";
import bcrypt from "bcryptjs";


const signUp = async (payload: Record<string, unknown>) => {
    const { name, email, password, phone, role } = payload;
    const hashPass = await bcrypt.hash(password as string, 10);
    const result = await pool.query(`
        INSERT INTO users(name,email,password,phone,role) VALUES($1,$2,$3,$4,$5) RETURNING *
        `, [name, email, hashPass, phone, role]);
    return result;
}



// const login = async (payload: Record<string, unknown>) => {
//     const { email } = payload;
//     const result = await pool.query(`
//         SELECT * FROM users WHERE email= $1
//         `, [email]);
//     console.log(email);
//     return result;
// }


const getAllUser = async () => {
    const result = await pool.query(`
        SELECT * FROM users
        `)
    return result;
}


export const userServices = {
    signUp,
    getAllUser,
    //login
}