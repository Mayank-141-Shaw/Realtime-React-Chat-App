const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


const app = express();
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());


// make server
const server = app.listen(process.env.PORT, ()=>{
    console.log('Server started on port '+process.env.PORT)
})