import mongoose from "mongoose";
import { Schema } from "mongoose";
import Iorganization from "../interfaces/iorganization";
import { nanoid } from "nanoid";

const organizationSchema = new Schema({
  _id:{
    type:String,
    default:()=> nanoid()
  },
  orgName: {
    type: String,
    required: true
  },
  address: {
    addressLine1:{
      type:String,
      required:false
    },
    addressLine2:{
      type:String,
      required:false
    },
    orgNo: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    zipcode: {
      type: String,
      required: false,
    }

  },

  userId: { type: String, required: true },
  isActive:{
    type:Boolean,
    default:false,
  }
})

let organization = mongoose.model<Iorganization>("organization", organizationSchema);
export default organization
