import express from "express";
import Connect_Database from "./database/connection.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({ path: "./src/.env" });


//connect to mongodb
Connect_Database()
.then(()=>{
    app.get('/',(req,res)=>{
        res.send('<center><h1 class="title">Library Mangement System API V1</h1></center>')
    })
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Site Is Live On Port ${process.env.PORT || 8000}`)
    })
})
.catch((error)=>{
    console.log("Some error Occurred , While Going Online")
})

