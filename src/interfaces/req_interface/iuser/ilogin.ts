import Ireq from "../Ireq"
export default interface Ilogin extends Ireq{
        body:{
            userName:string,
            password:string
        }
}