import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import {v4 as Uuid} from 'uuid'

import jwt from 'jsonwebtoken'

const UserSchema=new mongoose.Schema({
    id:{
        type:String,
        default:()=>Uuid()
    },

    username:{
        type:String,
        required:true
    },
    //passowrd
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:['user','admin']
    }

},{timestamps:true})

UserSchema.pre('save',async function(next){
    if(!this.isModified('password')) return next()
    
    this.password=await bcrypt.hash(this.password,10)
    return next()
})

UserSchema.methods.IsPasswordCorrect=async function (password){
    
    if (!this.password) {
       
        throw new Error('Password not set for this user.');
    }
    return await bcrypt.compare(password, this.password);
}


UserSchema.methods.Generatejwttoken=async function (){
    return jwt.sign(
        {
            username:this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY  
        }


    )
}




const User=mongoose.model('User',UserSchema)

export default User