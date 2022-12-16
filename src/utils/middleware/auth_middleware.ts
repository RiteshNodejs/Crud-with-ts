import ResponseHelper from "../helpers/response_helper.js";
import jwt from "jsonwebtoken";
import Iauth from 'src/interfaces/req_interface/iauth'
class AuthValidaton{
    Validattion(req:Iauth, res, next)
    { 
        const header = req.headers.authorization;
        const token = header.replace("Bearer ","")
        try {
            const decoded = jwt.verify(token, "mykey")
          
            req.user = decoded
        }
        catch (err) {
            let payload = {
                message: err.message,
                payload: {}
            }
            return ResponseHelper.error(res, payload, 401);
        }
        next();
    }
}

export default new AuthValidaton;