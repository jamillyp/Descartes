const { response, request } = require('express');
const ArtesaoModel = require('../models/ArtesaoModel');

module.exports.criarArtesao = (request, response) => {

    ArtesaoModel.create(request.body)
        .then((data) => {
            console.log('Artesão cadastrado! ')
            console.log(data)
            response.json(data)  
        })
        .catch((erro) => {
            console.log(erro)
        })
}


