import Ireq from '../Ireq'
export default interface IorgAdd extends Ireq {
    body:{
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
    isActive:Boolean,
  
},
user:{
    _id:String
}
}