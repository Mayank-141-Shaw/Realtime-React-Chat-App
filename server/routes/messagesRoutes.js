const { addMessage, getAllMessage } = require("../controllers/messagesController")


// making a router
const router = require("express").Router()

// adding the controller add message route
router.post("/addmsg/", addMessage)

// adding the controller get all msg route
router.get("/getmsg/", getAllMessage)

module.exports = router;