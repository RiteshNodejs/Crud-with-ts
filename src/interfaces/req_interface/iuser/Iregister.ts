import Ireq from "../Ireq"
export default interface Ireg extends Ireq{
    body:{
        firstName:String,
    lastName:String,
    userName:String,
    email:String,
    password:String,
    organization:{
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
    }
    

}