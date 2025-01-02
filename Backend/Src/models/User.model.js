import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import { v4 as uniqueid } from 'uuid';

const UserSchema=new mongoose.Schema({
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
    return await bcrypt.compare(password,this.password)
}



const User=mongoose.model('User',UserSchema)

export default User