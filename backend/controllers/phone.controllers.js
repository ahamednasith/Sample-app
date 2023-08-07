const db = require('../models/index');
const { Sequelize,Op } = require('sequelize');
const {removeOtp} = require('../utils/cron');
const { encrypt } = require('../utils/cryptAndJwt');
const Phone = db.phone;

const signup = async (req,res,next) => {
    const phoneNumber = req.body.phoneNumber;
    const otp = Math.floor(100000 + Math.random() * 900000);
    const currentTime = new Date();
    const createdAt = new Date(currentTime.getTime());
    const expiredAt = new Date(currentTime.getTime() + 5 * 60000)
    const phone = await Phone.create({
        phoneNumber,
        otp,
        createdAt,
        expiredAt
    });
    return res.status(200).json({
        statuscode:200,
        message:"OTP Generated"
    });
}

const login = async(req,res) => {
    const phoneNumber = req.body.phoneNumber;
    const otp = req.body.otp;
    const currentTime = new Date();
    const phone = await Phone.findOne({
        where:{
            phoneNumber:phoneNumber,
            otp:otp,
            expiredAt:{
                [Op.gt]:currentTime
            }
        }
    });
    if(!phone || currentTime > phone.expiredAt){
        return res.status(402).json({
            statuscode:402,
            message:"OTP Expired"
        })
    }
    return res.status(200).json({
            statuscode:200,
            message:"OTP Verified"
        })
    
}

module.exports = {signup,login}