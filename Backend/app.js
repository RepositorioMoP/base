const express = require('express')
const app = express();
const mongoose = require("mongoose")
const db = require("./src/config/db")
const Admin = require("./router/admin")
const search = require("./router/search")




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
app.use("/admin",Admin)
app.use("/search",search)

const PORT = process.env.PORT || 3000 

app.listen(PORT,()=>{
    console.log("servidor rodando!")
});

