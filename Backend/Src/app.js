import express,{urlencoded,json} from 'express'
import cors from 'cors'
import { router as userrouter } from './routes/User.router.js'
import cookieParser from 'cookie-parser'
import {router as bookrouter} from './routes/Book.router.js'
const app=express()


app.use(cors({
    origin:"/*",
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(json({limit:'16kb'}))

app.use(urlencoded({
    limit:"16kb",
    extended:true

    
}))



app.use(cookieParser())
app.use(express.static("Public"))


app.use("/api/v1/user/",userrouter)
app.use("/api/v1/book/",bookrouter)


export default app;