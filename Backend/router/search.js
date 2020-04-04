const express = require("express")
const router = express.Router()
const mongoose =  require('mongoose')
require("../src/models/Imovel")
const Imovel = mongoose.model("imoveis")


router.get("/",(req,res)=>{


   
})
router.post("/",(req,res)=>{

    Imovel.find().then((imoveis)=>{
        res.send(imoveis);
    })
   

})


module.exports = router //exportando as rotas 