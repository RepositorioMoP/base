const express = require('express')
const app = express();
const mongoose = require("mongoose")
const db = require("./src/config/db")




//config

//cofig do mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI).then(()=>{
    console.log("conectado ao mongoDB!")
}).catch((err)=>{
    console.log("erro ao de conexão: "+err)
})

//rotas
app.get("/",(req,res)=>{
    res.send("rota principal")
})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("servidor rodando!")
});

