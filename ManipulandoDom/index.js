const express = require ('express');
const server = express(); //chamando a função express
server.use(express.json());

//middleware de log mostrando contagem de requisições
//ver express morgan
server.use((req, res, next)=> {
  console.log();

  return next();
});

//middleware local
function checkIdExists(req, res, next)=> {
  if(!req.body.id){
    return res.status(400).json({ error:'Id não cadastrado'});
  };
  return next();
})

//Query params = ?teste=1
server.get('/projects:id',(req,res) => {
    const{id} = req.params; //desestruturando ES6 -> const id = req.query.id;

    return res.json({ message: 'Projetos e tarefas ${id}' });

})
//Route params = /users/1
//Request body = {"nome": "Diego", ...}
server.post('/projects/:id/tasks' (req,res)=>{
  const { title } = req.body;

  return res.json(users[title]);
})

server.post('/projects')

server.put('/projects/:index',checkIdExists (req, res) => {
  const { index } = req.params;
  const { title } = req.boby;

  users [ index ] = title;

  return res.jason(title);
})

server.delete('/projects/:index', (req, res)=> {
  const { index } = req.params;

  users.splice(index, 1);

  return res.json(users);
});

server.listen(3000);
