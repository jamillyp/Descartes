const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// esquema para cadastro Empresa

const empresaSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    razaoSocial: {
        type: String,
        
    },
    cnpj: {
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
    site: {
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
    },
    negociacoes: {
        type: Number,
        default: 0
    },
    notificacao: {
        type: Number,
        default: 0
    },
    materiais: [{
        tipoMaterial: {
            type: String,
        },
        qtdTam: {
           type: String,
        },
        disponibilidade: {
            type: String,
        },
        horario: {
            type: String,
        }

    }]
});

empresaSchema.pre('Salvo', async function(next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha =  hash;

    next();
});

module.exports = mongoose.model('Empresa', empresaSchema);
