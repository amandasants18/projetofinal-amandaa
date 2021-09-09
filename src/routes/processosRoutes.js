const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require("../controllers/processosController")

router.get("/", controller.getAllProcessos)
router.post("/create", controller.createProcesso)
router.delete("/:id", controller.deleteProcesso)
router.get("/:cliente", controller.getProcessosPorCliente)
router.patch("/id", controller.updateProcesso )
 


module.exports = router