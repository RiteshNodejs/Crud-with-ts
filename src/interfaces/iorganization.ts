import { Document } from "mongoose";
export default interface Iorganization extends Document{ 
    _id:String,
    orgName:String,
    address:{
        addressLine1:String,
        addressLine2:String,
        orgNo:String,
        city:String,
        state:String,
        country:String,
        zipCode:String
    },
    userId:String,
    isActive:Boolean
}