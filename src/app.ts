import  express  from "express";
const app =express();
import bodyparser from "body-parser";
import Route from './routes/route'
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
import dotenv from 'dotenv'
require('dotenv').config()
console.log(process.env) 
import mongoose from 'mongoose';

import { Application } from "express-serve-static-core";
import MESSAGES from "./utils/helpers/message_helper";
mongoose.set("strictQuery",false)
mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log(MESSAGES.DB_SUCCESS)
}).catch((err) => {
    console.log(MESSAGES.DB_ERROR, err)
})
Route(app)
app.listen(3200)