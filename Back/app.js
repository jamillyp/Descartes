const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ArtesaoRoutes = require('./src/routes/ArtesaoRoutes');
const EmpresaRoutes = require('./src/routes/EmpresaRoutes');

// config porta do servidor
const portaHttp = 4000;

// config express
const app = express()

// config cors
app.use(cors())

// config bodyParser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// config mongoose para banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/descartesBancoD').then((result) => {
    console.log('Banco conectado com sucesso!  ' + result)
}).catch((err) => {
    console.log('Erro, Banco não conectado! ' + err)
});

// rotas: Empresa e Artesão
app.use('/empresas', EmpresaRoutes)
app.use('/artesao', ArtesaoRoutes)

// servidor
app.listen(portaHttp, () => {
    console.log('servidor funcionando em: ' + portaHttp)
});