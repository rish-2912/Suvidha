const express = require("express");
const { MyDonations, CreateDonation, AddDonation, UpdateDonation } = require("../controllers/donation.controller");
const router = express.Router();

router.get("/")
router.get("/MyDonations",MyDonations)
router.post("/CreateDonation",CreateDonation)
router.post("/AddDonation",AddDonation)
router.post("/UpdateDonation",UpdateDonation)


module.exports = router