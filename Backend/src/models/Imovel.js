const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Imovel = new Schema({
    nome:{
        type:String
        
    }
   
   
})

mongoose.model("imoveis",Imovel)