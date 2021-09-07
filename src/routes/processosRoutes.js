const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require("../controllers/processosController")

router.get("/", controller.getProcessoId)
router.get("/", controller.getAllProcessos)
router.post("/create", controller.createProcesso)
router.delete("/:id", controller.deleteProcesso)

 


module.exports = router