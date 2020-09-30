const { response } = require('express');
const express = require('express');
const { request } = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

// config porta do servidor
const portaHttp = 4000;

// config express
const app = express()

//Config cors
app.use(cors())

// config bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// rotas de testes para projeto
app.post('/cadastrarEmpresa', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});
app.post('/cadastrarPessoaf', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});
app.post('/logar', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});

// servidor
app.listen(portaHttp, () => {
    console.log('servidor funcionando em: ' + portaHttp)
});