const mongoose = require("mongoose")

const RatingAndReviewSchema = new mongoose.Schema({

  user:{
    type:String,
    ref:"User"
  },

  rating:{
    type:Number,
  },

  review:{
    type:String,
    required:true,
  },
  
})

module.exports = mongoose.model("RatingAndReview",RatingAndReviewSchema)