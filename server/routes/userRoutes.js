const { register, login, setAvatar } = require("../controllers/userController")


// making a router
const router = require("express").Router()

// adding the controller regiser route
router.post("/register", register)

// adding the controller login route
router.post("/login", login)

// adding the controller login route
router.post("/setAvatar/:id", setAvatar)


module.exports = router;