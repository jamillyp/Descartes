const mongoose = require('mongoose');


// esquema para cadastro Empresa

const empresaSchema = mongoose.Schema({
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
    materiais: [{
        tipoMaterial: String, 
        qtdTam: Number,
        disponibilidade: Date,
        horario: String
    }]
});

module.exports = mongoose.model('Empresa', empresaSchema);