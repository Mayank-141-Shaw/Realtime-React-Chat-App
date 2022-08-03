const { register, login, setAvatar, getAllUsers } = require("../controllers/userController")


// making a router
const router = require("express").Router()

// adding the controller regiser route
router.post("/register", register)

// adding the controller login route
router.post("/login", login)

// adding the controller login route
router.post("/setAvatar/:id", setAvatar)

// getting list of all users
router.get("/allUsers/:id", getAllUsers)

module.exports = router;