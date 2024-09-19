const Otp = require("../models/Otp")
const User = require("../models/User")
const otpGenerator = require("otp-generator")
const bcrypt = require("bcrypt")
const Profile = require("../models/Profile")
const jwt = require("jsonwebtoken")
const cookie = require("cookie")

// Otp Controllers 

exports.sendOtp = async (req, res) => {
  try {

    const { email } = req.body;

    const checkUser = await Otp.findOne({ email })

    if (checkUser) {
      return res.status(401).json({
        success: false,
        message: "User already Exists. Please Login in."
      })
    }

    // Generate Otp 

    let otp = otpGenerator.generate(6, {
      digits: true,
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    })

    console.log(otp)

    // check unique otp 

    const result = await Otp.findOne({ otp: otp })

    while (result) {
      otp = otpGenerator.generate(6, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      })
      result = await Otp.findOne({ otp: otp })
    }

    const otpPayload = new Otp({ email, otp })
    const savedPayload = otpPayload.save()

    console.log(savedPayload)

    res.status(200).json({
      success: true,
      message: "Otp send successfully",
      savedPayload,
    })

  } catch (error) {
    console.log("error occur when send otp ", error)
    return res.status(500).json({
      success: false,
      message: "Network Issues Try Again!"
    })
  }
}

// Signup controller 

exports.signup = async (req, res) => {
  try {

    // fetch data 

    const { firstName, lastName, email, password, confirmPassword, accountType, contactNumber, otp } = req.body

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(403).json({
        success: false,
        message: "Please fill the fields"
      })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password does not matched"
      })
    }

    // check User 

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already existing"
      })
    }

    // Recent Otp 

    const recentOtp = await Otp.find({ email }).sort({ createAt: -1 }).limit(1)

    // Validate Otp 

    if (recentOtp.length == 0) {
      return res.status(400).json({
        success: false,
        message: "Otp not found"
      })
    } else if (otp !== recentOtp) {
      return res.status(400).json({
        success: false,
        message: "Invalid Otp"
      })
    }

    // hashed Password 

    const hashedPassword = await bcrypt.hash(password, 10)

    // entry create in db 

    const profileDetails = await Profile.create({
      gender: null,
      dateOfBirth: null,
      about: null,
      contactNumber: null,
    })

    const user = await User.create({
      firstName, lastName, email, contactNumber, password: hashedPassword, accountType, additionalDetails: profileDetails._id,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
    })

    res.status(200).json({
      success: true,
      message: "User is Registered Successfully",
      user
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Network Issues"
    })
  }
}

// Login controller 

exports.login = async (req, res) => {
  try {

    const { email, password } = req.body

    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "Please fill all fields"
      })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not Registered"
      })
    }

    // generate jwt and cookie 

    if (await bcrypt.compare(password, user.password)) {

      const payload = {
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      }

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h"
      })

      user.token = token;
      user.password = undefined;

      const options = {
        maxAge:  3 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      }

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User Logged In"
      })
    } else {
      return res.status(401).json({
        success: false,
        message: "password Incorrect"
      })
    }

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Error occur"
    })

  }
}

//Reset Password


