const express = require("express")
const router = express.Router()


router.get("/",(req,res)=>{
    res.send("rota funcional")
})


module.exports = router //exportando as rotas 