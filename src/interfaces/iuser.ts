import { Document } from "mongoose";
export default interface Iuser extends Document{ 
    _id:String,
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    password:String,
    updatePassword:Boolean
}