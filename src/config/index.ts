import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });


const configData = {
    connectionstr: process.env.CONNECTION_STR,
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET
}

export default configData;