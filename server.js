const express = require('express')
const app = express()
const cors = require('cors')
const index = require('./src/routes/index')
const PORT  = process.env.PORT || 8080


//TODO:
//conectar o db
const db = require('./src/data/database')
db.connect()
//usar as rotas
app.use(cors())
app.use(express.json())
app.use("/", index)

const processosRouter = require('./src/routes/processosRoutes')
app.use('/processos', processosRouter)
const clientesRouter = require('./src/routes/clientesRoutes')
app.use('/clientes', clientesRouter)




app.listen(PORT , () => console.log('listening on port 8080'))
