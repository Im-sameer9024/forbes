const mongoose = require("mongoose")
const mailSender = require("../utils/mailSender")

const OtpSchema = new mongoose.Schema({

  email:{
    type:String
  },

  otp:{
    type:Number
  },

  createAt:{
    type:Date,
    default:Date.now(),
    expires:5*60,
  }

})

async function sendVerificationEmail(email,otp){
  try {

    const mailResponse = await mailSender(email,"Verification OTP",otp)
    console.log(mailResponse)
    
  } catch (error) {
    console.log("error occur when mail sent",error)
    
  }
}

OtpSchema.pre("save",async function(next){
  await sendVerificationEmail(this.email,this.otp)
  next()
})



module.exports = mongoose.model("Otp",OtpSchema)