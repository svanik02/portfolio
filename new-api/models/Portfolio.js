const mongoose = require("mongoose");

const portfolioSchema= mongoose.Schema(
    {
        name:String,
        username:String,
        email:String,
        password:String,
        phone:String,
        subject:String,
        feedback:String,
    }
)

module.exports =mongoose.model("Portfolio",portfolioSchema);