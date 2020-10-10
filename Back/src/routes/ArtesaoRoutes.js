const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

require('../models/ArtesaoModel')
const ArtesaoModel = mongoose.model('Pessoaf')


// cadastro de Pessoa física
router.post('/cadastrarPessoaf', (request, response) => {
    //console.log(request.body)
    //response.json(request.body)

    ArtesaoModel.create(request.body)
        .then((data) => {
            console.log('usuario cadastrado! ')
            console.log(data)
            response.json(data)  
        })
        .catch((erro) => {
            console.log(erro)
        })

});


module.exports = router;