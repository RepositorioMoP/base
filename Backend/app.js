const express = require('express')

const app = express();



//config


//rotas
app.get("/",(req,res)=>{
    res.send("rota principal")
})

const PORT = 3000

app.listen(PORT,()=>{
    console.log("servidor rodando!")
});

