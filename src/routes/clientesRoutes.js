const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require("../controllers/clientesController")






//listar um estudio/get/findById
router.get("/", controller.getAll)
//atualizar uma informacao especifica num estudio/patch/findById/save
router.post("/create", controller.createClientes)
// //listar todos os estudios/get/find
// router.get('/', async (req, res) => {
//   const clientes = await Clientes.find()
//   res.json(clientes)
// })

// //criar um novo estudio/post/save
// router.post('/', async (req, res) => {
//   const clientes = new Clientes({
//     _id: new mongoose.Types.ObjectId(),
//     nome: req.body.nome,
//     criadoEm: req.body.criadoEm,
//   })
 
//    const clienteJaExiste = await Clientes.findOne({nome: req.body.nome})
//    if (clienteJaExiste) {
//      return res.status(409).json({error: 'Cliente ja cadastrado.'})
//   }
// //  try{

// //      const novoCliente = await cliente.save()
// //      res.status(201).json(novoCliente)
    
// //     }catch(err){

// //     res.status.apply(400).json({message: err.message})
// //  }
// })

router.get("/oi", (req, resp)=>{
  resp.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})





// router.patch('/:id', controller.updateCliente)


//deletar um estudio/delete/findById/remove

// router.delete('/:id', controller.deleteCliente)

module.exports = router
