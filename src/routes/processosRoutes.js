const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require("../controllers/processosController")


router.post("/create", controller.createProcesso)



module.exports = router