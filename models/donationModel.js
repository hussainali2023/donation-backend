const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
   donationAmount: {type:Number, require:true},
   donationerName:{type:String, require:true},
   donationCategory: {type:String, require:true}

   
})

const model = mongoose.model("donation", DonationSchema)

module.exports = model;