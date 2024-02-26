const express = require("express");
const router = express.Router()
const userRoutes = require("./userRoute")
const inventoryRoutes = require("./donationRoutes")


router.use("/api/v1/user", userRoutes)
router.use("/api/v1/donation", inventoryRoutes)

module.exports = router;

