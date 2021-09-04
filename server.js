const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 3333
//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(cors())
app.use(express.json())


const clientesRouter = require('./src/routes/clientesRoutes')
app.use('/clientes', clientesRouter)
const processosRouter = require('./src/routes/processosRoutes')
app.use('/processos', processosRouter )


app.listen(PORT, () => console.log('listening on port 3333'))


module.exports = app