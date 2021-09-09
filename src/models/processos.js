const mongoose = require('mongoose')

const processosSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numero: {
      type: String,
      required: true
    },
    descricao_lide: {
      type: String,
      required: true
    },
    comarca: {
      type: String,
      required: true
    },

    prazo: {
      type: String,
      required: true
  },
   

    fase_processual: {
        type: String,
        required: true
    },

    
    cliente: {
 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'clientes'
  
  },

      criadoEm: {
      type: Date,
      required: true,
      default: new Date
    }
  })
  
  module.exports = mongoose.model('processos', processosSchema)
  
  