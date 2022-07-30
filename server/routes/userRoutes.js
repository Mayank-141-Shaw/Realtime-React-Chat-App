const { register } = require("../controllers/userController")

// making a router
const router = require("express").Router()

// adding the controller regiser route
router.post("/register", register)

module.exports = router;