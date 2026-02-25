import { Pool } from "pg";
import configData from ".";

const pool = new Pool({
    connectionString: configData.connectionstr
})

const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS abir(
        id SERIAL PRIMARY KEY,
        name VARCHAR(150) NOT NULL,
        email VARCHAR(150) UNIQUE NOT NULL,
        password TEXT NOT NULL,
        age INT,
        phone VARCHAR(15),
        address TEXT,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `);

    await pool.query(`
        CREATE TABLE IF NOT EXISTS raha(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES abir(id) ON DELETE CASCADE,
        tittle VARCHAR(200) NOT NULL,
        description TEXT,
        completed BOOLEAN DEFAULT false,
        due_date DATE,
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
        )
        `)
};

export default initDB;