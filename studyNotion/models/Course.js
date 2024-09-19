const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({

  courseName:{
    type:String,
    required:true,
  },

  courseDescription:{
    type:String,
    required:true,
    trim:true,
  },

  instructor:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  whatYouWillLearn:{
    type:String,
  },

  courseContent:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Section"
  }],

  ratingAndReview:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"RatingAndReview"
  }],

  studentEnrolled:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }]

})

module.exports = mongoose.model("Course",courseSchema)