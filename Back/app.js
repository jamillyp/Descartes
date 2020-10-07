const { response } = require('express');
const express = require('express');
const { request } = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { send } = require('process');
const mongoose = require('mongoose');

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

// config mongoose
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/descartesDB').then((result) => {
    console.log('Banco conectado com sucesso!  ' + result)
}).catch((err) => {
    console.log('Erro, Banco não conectado! ' + err)
});

// Models p banco de dados

// model para o Login
const LoginSchema = mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    senha: {
        type: Number,
    }
});
mongoose.model('login', LoginSchema);
const novoLogin = mongoose.model("login");

// teste p login

/*const usuarioJamilly = mongoose.model('login');
new usuarioJamilly ({
    email: 'jamillyp@alu.ufc.br',
    senha: '123456'
}).save().then((result) => {
    console.log('usario cadastrado com sucesso! ' + result)
}).catch((err) => {
    console.log('erro! usuario nao cadastrado! ' + err)
});*/

// esquema para cadastro Empresa
const empresaCadastroSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    razaoSocial: {
        type: Number,
    },
    cnpj: {
        type: Number,
    },
    endereco: {
        type: String,
    },
    numero: {
        type: Number,
    },
    complemento: {
        type: String,
    },
    cep: {
        type: Number,
    },
    cidade: {
        type: String,
    },
    tel1: {
        type: String,
    },
    tel2: {
        type: String,
    },
    site: {
        type: String,
    },
    email: {
        type: String,
    },
    senha: {
        type: String,
    },
    senhaRep: {
        type: String,
    }
});
mongoose.model('empresaCadastro', empresaCadastroSchema);
const novoCadastroEmpresa = mongoose.model("empresaCadastro");

// esquema para cadastro Pessoa física
const pessoafCadastroSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    cpf: {
        type: Number,
    },
    dataNasc: {
        type: String,
    },
    endereco: {
        type: String,
    },
    numero: {
        type: Number,
    },
    complemento: {
        type: String,
    },
    cep: {
        type: Number,
    },
    cidade: {
        type: String,
    },
    tel1: {
        type: String,
    },
    tel2: {
        type: String,
    },
    email: {
        type: String,
    },
    senha: {
        type: String,
    },
    senhaRep: {
        type: String,
    }
});
mongoose.model('pessoafCadastro', pessoafCadastroSchema);
const novoCadastroPessoaf = mongoose.model("pessoafCadastro")


// rotas para requisições

// cadastro de Empresa
app.post('/cadastrarEmpresa', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});

// cadastro de Pessoa física
app.post('/cadastrarPessoaf', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});

// login
app.post('/logar', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});

// (necessario colocar: method: 'post' & action='/logado' no form onde temos o login)
// (deve ser feito isso em todas as situções q precisam fazer algo do tipo, pegar do front e passar p back..)

// nova rota pra qnd o usuario fizer login
app.post("/logado", (request,response) => {
    response.render('index.js'); // ainda nao esta salvando no banco pq n sei oq renderizar aqui, talvez seja a home

    let email = request.body.email;
    let senha = request.body.senha;

    new novoLogin({
        email: email,
        senha: senha,
    }).save().then(() => {    
        console.log("Usuário logado! ")
        response.redirect("") //aqui é necessario criar 1 requisição e criar 1 action p renderizar a home ao logar
    }).catch((err) => {
        console.log("Erro ao logar! " + err)
    })  

});

// cadastro de materiais
app.post('/cadastrarMaterial', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});

// get empresa id logado -- não funcionou
app.get('/cadastrarMaterial', (request, response) => {
    response.send(request.params.tipoMaterial)
    response.send(request.params.qtdTam)
})

// servidor
app.listen(portaHttp, () => {
    console.log('servidor funcionando em: ' + portaHttp)
});