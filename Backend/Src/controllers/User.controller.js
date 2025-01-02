import { AsyncHandler } from "../utlities/Asynchandler.js";
import { ApiResponce } from "../utlities/Apiresponce.js";
import { ApiError } from "../utlities/Apierror.js";
import User from "../models/User.model.js";
const Signupuser=AsyncHandler(async(req,res)=>{
    //todos::- 
    // get the data from the form 
    // check user is already logged in or not
    // create new user 

    const{username,password,role}=req.body

    // if(username && password && role){
    //     throw new ApiError('400','All Fields Are Required')
    // }

    //check if user is already exists 
    const existeduser=await User.findOne({username})
    if(existeduser){
        throw new ApiError(401,'User Already Exists, Login to continue')

    }

   const user=await User.create({
    username,
    password,
    role
   })

   //remove password before sending responce
   const newuser=await User.findOne({username}).select('-password') //removing password from  object 
   
   if(!newuser){
    throw new ApiError(500,'Failed to create user. Please try again later.')
   }


   res.status(200)
   .json(
        new ApiResponce(200,'User is created succesfully!!',newuser)
   )



   



})














export {Signupuser}