import user from "../models/user";
import Helper from '../utils/helpers/index';
import MESSAGES from '../utils/helpers/message_helper'
import organization from '../models/organization'
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Iuser from "src/interfaces/iuser";
import Iorganization from "src/interfaces/iorganization";
import Ireq from '../interfaces/req_interface/iuser/Iregister';
import Ilogin from '../interfaces/req_interface/iuser/ilogin';
import Iprofile from '../interfaces/req_interface/iuser/iprofile';
import Iupdateuser from '../interfaces/req_interface/iuser/iupdateuser';
class UserServices {
    async addUser(req:Ireq, res) {
        try {
            //check userName is existed 
            const extUser = await user.findOne({ userName: req.body.userName });
            if (extUser) {
                let resPayload = {
                    message: MESSAGES.USER_NAME_ERROR
                };
                return Helper.error(res, resPayload)
            }
            let myUser:Iuser = new user(req.body);
            if (req.body.organization) {
                let org = {
                    orgName: req.body.organization.orgName,
                    address: req.body.organization.address,
                    userId: myUser._id,
                    isActive: true
                };
                let myorganization:Iorganization = new organization(org);
                await myorganization.save();
            }

            await myUser.save().then((value) => {

                const token = jwt.sign({ _id: value._id }, "mykey", {
                    expiresIn: "8000s"
                });
                    console.log(token)
                let resPayload = {
                    message: MESSAGES.REGISTER_SUCCESS,
                    payload: token,
                };
                return Helper.success(res, resPayload);
            })
                .catch((err) => {
                    let resPayload = {
                        message: MESSAGES.REGISTER_ERROR,
                        payload: {},
                    };
                    return Helper.error(res, resPayload);
                });


        } catch (err) {
            let resPayload = {
                message: MESSAGES.SERVER_ERROR,
                payload: {},
            };
            return Helper.error(res, resPayload, 500);
        }
    };
    async login(req:Ilogin, res) {
        {
            //check user is a valid user or not
            const extUser = await user.findOne({ userName: req.body.userName });
            if (!extUser) {
                let resPayload = {
                    message: MESSAGES.LOGIN_ERROR,
                    payload: {},
                };
                return Helper.error(res, resPayload);
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                extUser.password
            );
            if (!validPassword) {
                let resPayload = {
                    message: MESSAGES.LOGIN_ERROR,
                    payload: {},
                };
                return Helper.error(res, resPayload);
            }
            // genrate jwt token
            const token = jwt.sign({ _id: extUser._id }, "mykey", {
                expiresIn: "6000s",
            });
            let resPayload = {
                message: MESSAGES.LOGIN_SUCCESS,
                payload: { token: token },
            };
            return Helper.success(res, resPayload);
        }
    };
    async getProfile(req:Iprofile, res) {
        try {
            const idUser = req.user._id;
            const getUser = await user.findById<Iuser>(idUser);
            const findOrganization = await organization.find(
                { userId: idUser },
                { _id: 0, orgName: 1 }
            );
            console.log(getUser);
            const finalUser = {
                userName: getUser.userName,
                email: getUser.email,
                organization: findOrganization,
            };
            let resPayload = {
                message: MESSAGES.PROFILE,
                payload: finalUser,
            };
            return Helper.success(res, resPayload);
        } catch (err) {
            let resPayload = {
                message: MESSAGES.SERVER_ERROR,
                payload: {},
            };
            return Helper.error(res, resPayload, 500);
        }
    }
    async updateUser(req:Iupdateuser, res) {
        try {
            const idUser = req.user._id;
            const extUser:Iuser = await user.findOne({ userName: req.body.userName, _id: { $ne: idUser } })
                .lean();
            //$ne selects the documents where the value of the field is not equal to the specified value. This includes documents that do not contain the field.
            //   if(extUser.id!=idUser) ->also working

            if (extUser) {
                let resPayload = {
                    message: MESSAGES.USER_EXIST,
                };
                return Helper.error(res, resPayload);
            }
/// check the update password
            if (!req.body.updatePassword) {
                delete req.body.password;
            }        
         
            const updatedUser = await user.findByIdAndUpdate(idUser, req.body, { new: true })
                .then((value) => {
                    let resPayload = {
                        message: MESSAGES.UPDATED_SUCCESS,
                        payload: value.userName,
                    }
                    return Helper.success(res, resPayload);
                })

        } catch {
            let resPayload = {
                message: MESSAGES.SERVER_ERROR,
                payload: {},
            };
            return Helper.error(res, resPayload, 500);
        }
    }

}

export default new UserServices