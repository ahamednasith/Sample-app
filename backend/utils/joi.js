const Joi = require('joi');


const schema = Joi.object({
    phoneNumber: Joi.number().min(1000000000).max(9999999999),
    otp:Joi.number().min(100000).max(999999),
});

const otpGenerate = (req,res,next) => {
    const phoneNumber = req.body.phoneNumber;
    const {error} = schema.validate({phoneNumber});
    if(error){
        return res.status(402).json({error:error.message});
    }
    next();
}

const otpVerify = (req,res,next) => {
    const phoneNumber = req.body.phoneNumber;
    const otp = req.body.otp;
    const { error } = schema.validate({phoneNumber,otp});
    if(error){
        return res.status(401).json({error:error.message})
    }
    next();
}

module.exports = { otpGenerate,otpVerify }
