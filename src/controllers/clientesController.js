const mongoose = require('mongoose')
const Clientes = require('../models/clientes')

const getAll = async (req, res) => {
  const clientes = await Clientes.find()
  res.json(clientes)
}

const createClientes = async (req, res) => {
  const clientes = new Clientes({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,
  })

}
// const deleteCliente = async(req,res) =>{

//     try{

//         const cliente = await Clientes.findById(req.params.id)

//         // se vc nao encontrar me retorne um erro

//         if(cliente == null){
//             return res.status(404).json({message: "Cliente não encontrado"})
//         }

    
//      //deletando o estudio
//       await cliente.remove()

//      //retorne o documento deletados
//      res.status(200).json({message: "Cliente deletado"})
//     }catch(err){

//         //se houve qualquer erro mostre o erro acima
//         res.status(500).json({message: err.message})
//     }
// }
// const updateCliente = async(req,res) => {
// //tenta encontrar um estudio pelo id
//     try{
     
//         const cliente = await Clientes.findById(req.params.id)
        
//         //se vc nao encontrar me retorne um erro
//         if(cliente == null){
//             return res.status(404).json({message: "Cliente não encontrado"})
//         }
//         //no corpo da requisicao tem algo digitado? considere minha alteração
//      if(req.body.nome != null){

//         cliente.nome = req.body.nome
//      }
// //ja salvou??
//      const clienteAtualizado = await cliente.save()

//      //retorne o documento atualizado
//      res.status(200).json(clienteAtualizado)
//     }catch(err){

//         //se houve qualquer erro mostre o erro acima
//         res.status(500).json({message: err.message})
//     }




module.exports = {
  getAll,
  createClientes,
 
}
