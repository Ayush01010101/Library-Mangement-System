import { ApiResponce } from "../utlities/Apiresponce";
import { AsyncHandler } from "../utlities/Asynchandler.js";


const Healthcheck=AsyncHandler((req,res)=>{
    res.status(200)
    .json(
        new ApiResponce(200,'HEY, MY HEALTH IS GOOD,WHAT ABOUT YOU?')
    )
})


export default Healthcheck