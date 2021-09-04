const mongoose = require('mongoose')
const processos = require("../models/processos")


const getAllProcessos = async (req, res) => {
    const processos = await Processos.find()
    res.status(200).send(processos)
  }

  const createProcessos = async (req, res) => {
    const processos = new Processos({
      _id: new mongoose.Types.ObjectId(),
      numero: req.body.numero,
      descricao_lide: req.body.descricao_lide,
      comarca: req.body.comarca,
      fase_processual: req.body.fase_processual,
      prazo: req.body.prazo,
      criadoEm: req.body.criadoEm,
    })
  try{
  
    const novoProcesso = await processos.save()
    res.json(novoProcesso)
  }catch(err){
    res.status(400).json({message: err.message})
  }
}


  module.exports = 
  {
      getAllProcessos,
     createProcessos
}