import Ireq from '../Ireq'
export default interface Iupdateuser extends Ireq{
   body:{
    firstName:String,
    lastName:String,
    userName:String,
    email:String,
    password:String,
    updatePassword:Boolean  
   } ,
   user:{
    _id:String
   }
   
    
}