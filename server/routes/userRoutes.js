const { register, login } = require("../controllers/userController")


// making a router
const router = require("express").Router()

// adding the controller regiser route
router.post("/register", register)

// adding the controller login route
router.post("/login", login)


module.exports = router;