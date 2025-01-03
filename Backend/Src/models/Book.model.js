import mongoose, { mongo } from "mongoose";
import {v4 as Uuid} from 'uuid'

const BookSchema=new mongoose.Schema(
    {
        id:{
            type:String,
            default:()=>Uuid()

        },
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        status:{
            type:String,
            required:true
        },
        publishedYear:{
            type:Number,
            required:true
        }
    }
    ,
    {timestamps:true}
)


const Book=mongoose.model("Book",BookSchema)


export default Book