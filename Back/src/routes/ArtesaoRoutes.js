const express = require('express');
const mongoose = require('mongoose');

const { criarArtesao } = require('../controller/controllerArtesao');

const router = express.Router();

require('../models/ArtesaoModel')
const ArtesaoModel = mongoose.model('Pessoaf')

// cadastro de Pessoa física
router.post('/cadastrarPessoaf', criarArtesao);

module.exports = router;