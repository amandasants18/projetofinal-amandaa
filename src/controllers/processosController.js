const mongoose = require('mongoose')
const Processos = require('../models/processos')





const getAllProcessos = async (req,res) =>{

  const processos = await Processos.find()
  res.status(200).send(processos)

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

  //achar processo por id do cliente
  
  const deleteProcesso = async(req,res) =>{

    try{
  
        const processos = await Processos.findById(req.params.id)
  
        // se vc nao encontrar me retorne um erro
  
        if(processos == null){
            return res.status(404).json({message: "Cliente nao encontrado"})
        }
  
    
     //deletando o estudio
      await processos.remove()
  
     //retorne o documento deletados
     res.status(200).json({message: "Processo deletado"})
    }catch(err){
  
        //se houve qualquer erro mostre o erro acima
        res.status(500).json({message: err.message})
    }
  }
  
  module.exports = {

    createProcesso,
    getAllProcessos,
    deleteProcesso
    
    
  
  }
  