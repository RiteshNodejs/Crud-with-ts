import jsonschema, { validate } from 'jsonschema'
import jsonValidate from '../middleware/json_schema'
import Helper from '../helpers/index';
import MESSAGES from '../helpers/message_helper'
class JsonMiddleware {
    Middleware(req, res, next) {
        const tester= validate(req.body,jsonValidate)
        // res.send(tester.errors[0].message)
        if (tester.errors.length>0) {
            let errors = tester.errors.map((curr) => {
              let o = {};
              Object.assign(o, { message: curr.message.replace(/[\,"]/g, ' '), path: curr.path.toString() });
              return o;
            })
            let payload = {
              message: MESSAGES.VALIDATION_ERROR,
              payload: errors
            }
            return Helper.error(res, payload);
          }
             next()
          
      

    }
}
export default new JsonMiddleware;