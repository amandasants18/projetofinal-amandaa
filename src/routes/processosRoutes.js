const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require("../controllers/processosController")


//listar um estudio/get/findById
router.get("/", controller.getAllProcessos)
//atualizar uma informacao especifica num estudio/patch/findById/save
router.post("/create", controller.createProcessos)
//deletar


module.exports = router
