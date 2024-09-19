const jwt = require("jsonwebtoken")



exports.auth = async (req, res, next) => {
  try {

    const token = req.body.token || req.cookies.token

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token is not found"
      })
    }


    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET)

      console.log(decode)
      req.user = decode;

    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Token is Invalid"
      })

    }

    next()


  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'network issues'
    })
  }
}


// isStudent 

exports.isStudent = async (req, res, next) => {
  try {

    if (req.user.accountType !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is protected for Student"
      })
    }
    next()

  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "User accountType is not verified"
    })
  }

}

// isInstructor 

exports.isInstructor = async (req, res, next) => {
  try {

    if (req.user.accountType !== "Instructor") {
      return res.status(401).json({
        success: false,
        message: "This is a protected for only Instructor"
      })
    }

    next()

  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "network issues "
    })

  }
}

// isAdmin 

exports.isAdmin = async(req,res,next) =>{
  try {

    if(req.user.accountType !== "Admin"){
      return res.status(401).json({
        success:false,
        message:"This is protected for only Admin"
      })
    }

    next()
    
  } catch (error) {

    console.log(error)

    return res.status(500).json({
      success:false,
      message:"Network Issues"
    })
    
  }
}