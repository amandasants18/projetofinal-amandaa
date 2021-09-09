const mongoose = require('mongoose')
const Processos = require('../models/processos')


const getProcessosPorCliente = async (req, res) => { 
  const { cliente } = req.params
  
  Processos.find({ cliente : cliente }) 
  
  .then((list)=> { 
  
  if(!list.length > 0) return res.status(404).send({"message": "cliente n encontrado, tente novamente!"}) 
  
  return res.status(200).send(list) }) }

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
      prazo: req.body.prazo,
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


  
  const deleteProcesso = async(req,res) =>{

    try{
  
        const processos = await Processos.findById(req.params.id)
  
  
        if(processos == null){
            return res.status(404).json({message: "Cliente nao encontrado"})
        }
  
    
 
      await processos.remove()
  
     //retorne o documento deletados
     res.status(200).json({message: "Processo deletado"})
    }catch(err){
  
        //se houve qualquer erro mostre o erro acima
        res.status(500).json({message: err.message})
    }
  }

    const updateProcesso = async(req,res) => {
      //tenta encontrar processo pelo id
          try{
           
              const processo = await Processos.findById(req.params.id)
              
              //se vc nao encontrar me retorne um erro
              if(processo == null){
                  return res.status(404).json({message: "Processo não encontrado"})
              }
              //no corpo da requisicao tem algo digitado? considere minha alteração
           if(req.body.numero != null){
      
              processo.numero = req.body.numero
              processo.descricao_lide = req.body.descricao_lide
              processo.comarca = req.body.comarca
              processo.prazo = req.body.prazo
              processo.fase_processual = req.body.fase_processual
              processo.cliente = req.body.cliente
           }
      //ja salvou??
           const processoAtualizado = await processo.save()
      
           //retorne o documento atualizado
           res.status(200).json(processoAtualizado)
          }catch(err){
      
              //se houve qualquer erro mostre o erro acima
              res.status(500).json({message: err.message})
          }
      
  }

  
  module.exports = {

    updateProcesso,
    createProcesso,
    getAllProcessos,
    deleteProcesso,
    getProcessosPorCliente,
    
    
    
  
  }
  