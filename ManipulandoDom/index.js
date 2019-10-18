const express = require ('express');

const server = express(); //chamando a função express
//Query params = ?teste=1
server.get('/projects',(req,res) => {
    const nome = req.query.nome;
    return res.json({ message: 'Projetos e tarefas' });
})
//Route params = /users/1
//Request body = {"nome": "Diego", ...}

server.listen(3000);