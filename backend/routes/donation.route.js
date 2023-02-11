const express = require("express");
const { MyDonations, CreateDonation, AddDonation, UpdateDonation, AllDonations } = require("../controllers/donation.controller");
const router = express.Router();

router.get("/AllDonations",AllDonations)
router.get("/MyDonations/:id",MyDonations)
router.post("/CreateDonation",CreateDonation)
router.post("/AddDonation/:id",AddDonation)
router.post("/UpdateDonation",UpdateDonation)


module.exports = router