const express = require('express')
const app = express()
const cors = require('cors')


//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(cors())
app.use(express.json())

const processosRouter = require('./src/routes/processosRoutes')
app.use('/processos', processosRouter)
const clientesRouter = require('./src/routes/clientesRoutes')
app.use('/clientes', clientesRouter)




app.listen(8080, () => console.log('listening on port 8080'))
