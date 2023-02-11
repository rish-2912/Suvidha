const express = require("express");
const { MyDonations, CreateDonation, AddDonation, UpdateDonation, AllDonations } = require("../controllers/donation.controller");
const { AllEvents, MyEvents, CreateEvent, AttendEvent, UpdateEvent } = require("../controllers/event.controller");
const router = express.Router();

router.get("/AllEvents",AllEvents)
router.get("/MyEvents/:id",MyEvents)
router.post("/CreateEvent",CreateEvent)

router.post("/AttendEvent/:id",AttendEvent) //id of event is given in params append id of user
                                            //in attendees and send link

router.post("/UpdateEvent",UpdateEvent)


module.exports = router