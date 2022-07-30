const { register } = require("../controllers/userController")

// making a router
const router = require("express").Router()

// 
router.post("/register", register)