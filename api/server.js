const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const mainRoute=require("./routes/index.js");
const logger = require("morgan");

const app = express();
const cors = require("cors");
const port = 5000;

dotenv.config();

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongodb");
    } catch (error) {
        throw error;
    }
}

//app.get("/",(req,res)=> res.send("Hello world"))//5000. porta ekrana bir şey yazdırmak
//app.get("/api",(req,res)=> res.send(" world"))5000./api de porta ekrana bir şey yazdırmak

//! middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/api",mainRoute);



app.listen(port,()=> {
    connect();
    console.log(`Example app listening on port ${port}`)
})