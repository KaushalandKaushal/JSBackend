// require('dotenv').config({path: './env'})
  import dotenv from "dotenv"
// import mongoose from "mongoose"
// import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB()











// function connectDB(){
// }

// connectDB()



/*
import express from "express"
const app = express()


;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${
            DB_NAME
        }`)
        app.on("ERROR:", (error) =>{
            console.log("ERRR:", error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error('Error:', error)
        throw err
    }
})()
*/