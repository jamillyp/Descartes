const Pessoaf = require('../models/ArtesaoModel');

// listar artesões
module.exports.listarArtesao = function(req,res){
    let promise = Pessoaf.find().exec();
    promise.then(
        function(pessoaf){
            res.status(200).json(pessoaf);
            console.log(pessoaf)
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

// dados do artesão
module.exports.detalheArtesao = function(req,res){
    let id = req.params.id;
    let promise = Pessoaf.find(id);
    promise.then(
        function(pessoaf){
            res.status(200).json(pessoaf);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}

// adicionar artesao
module.exports.adicionarArtesao = function(req, res){
    let artesao_ = req.body;
    let promise = Pessoaf.create(artesao_);
    promise.then(
        function(pessoaf){
            res.status(201).json(pessoaf);
        }
    ).catch(
        function(erro){
            res.status(500).json(erro);
        }
    )
}