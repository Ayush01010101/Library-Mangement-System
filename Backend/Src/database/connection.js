import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({path:'./Src/.env'})


async function Connect_Database(){
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("connect to database sucessfully!!")
        
    } catch (error) {
        console.log('error while conneting to database error::',error)
    }
    
}

export default Connect_Database;
