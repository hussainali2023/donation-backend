const express = require('express');
const donationController = require("../controllers/donationController")

const router = express.Router();

router.post("/create-donation", donationController.createDonation)
router.post("/edit-donation/:id", donationController.editDonationById)
router.get("/email-donation/:email", donationController.findDonationByEmail)
router.delete("/delete-donation/:id", donationController.deleteDonationById)
router.get("/all-donation", donationController.findAlldonation)

module.exports = router;
