const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// esquema para cadastro Pessoa física
const pessoafSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
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
        type: String,
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
        required: true,
        unique: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
        
    }
});

pessoafSchema.pre('Salvo', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha =  hash;

    next();
});

module.exports = mongoose.model('Pessoaf', pessoafSchema);
