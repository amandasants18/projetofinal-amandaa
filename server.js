const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 3333
//TODO:
//conectar o db
const dbb = require('./src/data/database')
dbb.connect()
//usar as rotas
app.use(cors())
app.use(express.json())


const clientesRouter = require('./src/routes/clientesRoutes')
app.use('/clientes', clientesRouter)

// const titulosRouter = require('./src/routes/titulos.routes')
// app.use('/titulos', titulosRouter)

app.listen(3333, () => console.log('listening on port 3333'))


