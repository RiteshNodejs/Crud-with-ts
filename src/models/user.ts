import mongoose from "mongoose";
import {Schema}  from "mongoose";
import { nanoid } from "nanoid";
import Iuser from '../interfaces/iuser'
import bcrypt from "bcryptjs";


const userSchema = new Schema({
  _id:{
    type:String,
    default:()=> nanoid()
  },
   
  firstName:{
    type:String,
    required:true
  },
  lastName:{
    type:String,
    required:true
  },
  userName:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true,
  },
}, { timestamps: true });



userSchema.pre("save", async function (next) {
    try {
      const salt = await bcrypt.genSalt(12)
      const passwordhash = await bcrypt.hash(this.password, salt);
      this.password = passwordhash
      next();
    }
    catch (error){
     return next(error)
  
    }
  })

let user = mongoose.model<Iuser>("user",userSchema);
  export default user