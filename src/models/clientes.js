const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,

nome: {

    type: String,
    required: true
},

cpf: {

    type: String,
    required: true
},

sexo: {

    type: String,
    required: true
},

endereco: {

    type: String,
    required: true
},
data_nasc: {

    type: Date,
    required: true,
    default: new Date
},

processo: {
 
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'processo'

},


criadoEm: {

    type: Date,
    required: true,
    default: new Date
}



})

module.exports = mongoose.model('clientes', clienteSchema)