const mongoose = require('mongoose');


// esquema para cadastro Empresa

const empresaSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    razaoSocial: {
        type: Number,
        require: false
    },
    cnpj: {
        type: Number,
        require: false
    },
    endereco: {
        type: String,
        require: false
    },
    numero: {
        type: Number,
        require: false
    },
    complemento: {
        type: String,
        require: false
    },
    cep: {
        type: Number,
        require: false
    },
    cidade: {
        type: String,
        require: false
    },
    tel1: {
        type: String,
        require: false
    },
    tel2: {
        type: String,
        require: false
    },
    site: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    senha: {
        type: String,
        require: false
    },
    materiais: [{
        tipoMaterial: {
            type: String,
            require: false
        },
        qtdTam: {
           type: Number,
            require: false
        },
        disponibilidade: {
            type: Date,
            require: false
        },
        horario: {
            type: String,
            require: false
        }
    }]
});

module.exports = mongoose.model('Empresa', empresaSchema);
