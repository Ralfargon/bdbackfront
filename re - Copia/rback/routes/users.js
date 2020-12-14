var express = require('express');
var banco = require('../postgres/postgres')
var router = express.Router();



/* GET */
router.get('/', function(req, res, next) {
  let param = req.query.email
  console.log({param})
  banco.execute(`SELECT "senha", "email" FROM login where "email"='${param}'`)

  res.send(`Consulta feita com sucesso!`)
});

/* POST */
router.post('/', function(req, res, next) {
  banco.execute(`insert into login("senha", "email") values ('${req.body.senha}', '${req.body.email}')`)

  res.send('respond with a resource');
});



module.exports = router;
