import express,{urlencoded,json} from 'express'
import cors from 'cors'
import { router as userrouter } from './routes/User.router.js'

const app=express()


app.use(cors())

app.use(json({limit:'16kb'}))

app.use(urlencoded({
    limit:"16kb",
    extended:true

    
}))   

app.use("/api/v1/user/",userrouter)


export default app;