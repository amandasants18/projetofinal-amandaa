const mongoose = require('mongoose')
const Processos = require('../models/processos')



const getAllProcessos = async (req,res) =>{

  const processos = await Processos.find()
  res.status(200).send(Processos)

}
const createProcesso = async (req, res) => {
    const processos = new Processos({
      _id: new mongoose.Types.ObjectId(),
      numero: req.body.numero,
      descricao_lide: req.body.descricao_lide,
      comarca: req.body.comarca,
      fase_processual: req.body.fase_processual,
      cliente: req.body.cliente,
      criadoEm: req.body.criadoEm,
    })
  try{
  
    const novoProcesso = await processos.save()
    res.json(novoProcesso)
  }catch(err){
    res.status(400).json({message: err.message})
  }
  }

  module.exports = {

    createProcesso,
    getAllProcessos
    
    
  
  }
  