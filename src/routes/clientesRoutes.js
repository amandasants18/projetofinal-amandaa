const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Clientes = require('../models/clientes')
const controller = require('../controllers/clientesController')

//listar todos os estudios/get/find
// router.get('/', async (req, res) => {
//   const clientes = await Clientes.find()
//   res.json(clientes)
// })

//criar um novo estudio/post/save
router.post('/', async (req, res) => {
  const clientes = new Clientes({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,
  })
 
//   const clienteJaExiste = await Clientes.findOne({nome: req.body.nome})
//   if (clienteJaExiste) {
//     return res.status(409).json({error: 'Cliente ja cadastrado.'})
//   }
// try{

//     const novoCliente = await cliente.save()
//     res.status(201).json(novoCliente)
// }catch(err){

//     res.status.apply(400).json({message: err.message})
// }
})


//listar um estudio/get/findById

//atualizar uma informacao especifica num estudio/patch/findById/save

// router.patch('/:id', controller.updateCliente)


//deletar um estudio/delete/findById/remove

// router.delete('/:id', controller.deleteCliente)

module.exports = router
