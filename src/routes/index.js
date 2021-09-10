const express = require("express")
const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({
        "tittle": "Amanda Santos Advocacia e Consultoria Juridica",
        "version": "1.0.0",
        "mensagem": "Uma API que vai gerenciar melhor seus clientes e processos. "
    })
})

module.exports = router