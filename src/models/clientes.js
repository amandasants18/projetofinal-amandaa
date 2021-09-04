const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true
  },
  criadoEm: {
    type: Date,
    required: true,
    default: new Date
  }
})

module.exports = mongoose.model('clientes', clienteSchema)

