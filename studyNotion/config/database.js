const mongoose = require("mongoose")
require("dotenv").config()

exports.dbConnect = () =>{
  mongoose.connect(process.env.MONGODB_URL,{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
  })
  .then(()=>{
    console.log("DB is connected")
  })
  .catch((error)=>{
    console.log("DB connection is Failed")
    console.log(error)
    process.exit(1)
  })
}
