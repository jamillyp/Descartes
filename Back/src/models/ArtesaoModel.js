const mongoose = require('mongoose');

// esquema para cadastro Pessoa física
const pessoafSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model('Pessoaf', pessoafSchema);
