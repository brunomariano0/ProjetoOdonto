const express = require('express');
let app = express();

app.get('/', (req, res)=>res.send("Olá mundo!"));


//criando um servidor

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"))