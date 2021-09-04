const express = require('express')
const app = express()
const cors = require('cors')

//TODO:
//conectar o db
const dbb = require('./src/data/database')
dbb.connect()
//usar as rotas
app.use(express.json())
app.use(cors())

const clientesRouter = require('./src/routes/clientesRoutes')
app.use('/clientes', clientesRouter)

// const titulosRouter = require('./src/routes/titulos.routes')
// app.use('/titulos', titulosRouter)
const PORT = process.env.PORT || 3333
app.listen(3333, () => console.log('listening on port 3333'))


