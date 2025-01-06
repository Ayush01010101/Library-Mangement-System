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




    if(!(username && password && role)){
        throw new ApiError('400','All Fields Are Required')
    }

    // check if user is already exists 
    const existeduser=await User.findOne({username})
    if(existeduser){
        throw new ApiError(401,'Username is already taken. Please try a different one.')

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



const Loginuser=AsyncHandler(async(req,res)=>{
    //todo's to achieve login fucntionlity
    //get the data from body and check the user is exists in the database or not
    //if !not exists throw error with error code 402 'user is not exists'
    //if user exists then check the passowrd correct or not using ISpass..correct fucntion which is defined in the user.model.js file
    //if is not correct throw the error 
    //if password is valid generate jwt token (add checks for jwt token )
    //if jwt token generate then store in the user 
    //check the user is authencated or not 
    



    const {username,password}=req.body

   
    if (!(username && password)){
        throw new ApiError(400,'All Fields Are Required!')
    }

    const user=await User.findOne({username})

    //removeing password before sending it to frontend
    const resuser=await User.findOne({username}).select("-password")

    if(!user){
        throw new ApiError(402,'user is not exists, please try again')
    }

    // Ensure that the user object is valid before checking the password
    if (!user.password) {
        throw new ApiError(500, 'User password is not set.');
    }

    //password validation 
    const check_password=await user.IsPasswordCorrect(password);
    
    if(!check_password){
        throw new ApiError(400,'Incorrect password ')
    }

    //generate token 
    const token=await user.Generatejwttoken()

    if(!token){
        throw new ApiError(500,'Server error while generating token ')
    }   

    const options ={
        httpOnly:true,
        secure:true,
        sameSite:'lax', 
        maxAge:(7 * 24 * 60 * 60 * 1000)
       
    }

    

    res.status(200)
    .cookie('token',token,options)
    .json(
        {
            status_code:200,
            status:'User Succesfully Logged In ',
            data:resuser
        }
    )
})



const Logout=AsyncHandler(async function (){
    //todos
    //clear the cookies from browswer 
    
    const options ={
        httpOnly:true,
        secure:true,
        sameSite:'lax'
    }


    res.status(200)
    .clearCookie('token',options)
    .json({
        status_code:200,
        status:'User Logged Out Succesfully !! , Cookies Cleared'
    })
    

})




export {Signupuser,Loginuser,Logout}