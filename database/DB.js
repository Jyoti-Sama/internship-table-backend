import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connection = async () => {

    try {        
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("connected to database.");
    } catch (error) {
        console.log(error, "could not connect to database.");
    }
}