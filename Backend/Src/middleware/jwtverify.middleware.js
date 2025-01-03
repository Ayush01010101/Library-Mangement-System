import User from "../models/User.model.js";
import jwt from 'jsonwebtoken'
import { AsyncHandler } from "../utlities/Asynchandler.js";
import cookieParser from "cookie-parser";
import { ApiError } from "../utlities/Apierror.js";

const jwtverify=AsyncHandler(async function (req,res,next){
    //get user data from cookies
    const token = await req.cookies.token;

    // console.log(token)
    if (!token) {
        throw new ApiError(405, 'Cookie not found. User is not authorized.');
    }

    //decode the token
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decodedToken) {
        throw new ApiError(504, 'Failed to decode the jwt token, Server issue happened');
    }

    //find user 
    const user = await User.findOne({ username: decodedToken.username });

    if (!user) {
        throw new ApiError(504, 'user not found in database');
    }

    req.user = user;

    next();
})


export default jwtverify