const mongoose = require('mongoose')


const mongo_url = process.env.MONGODB_URI || "mongodb://localhost:27017/advogados_associados"

const connect = () => {mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('Database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }

