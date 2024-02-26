const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
    donationCategory: {type: String, required:true},
    userEmail:String,
    productName: {type:String, required: true},
    productQuantity: {type: Number, required:true},
    productPrice: {type:Number, required:true}

   
})

const model = mongoose.model("donation", DonationSchema)

module.exports = model;