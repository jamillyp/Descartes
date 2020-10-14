const { response, request } = require('express');
const EmpresaModel = require('../models/EmpresaModel');

// listar empresas
module.exports.listarEmpresas = (request, response) => {

    EmpresaModel.find()
        .then((empresas) => {
            response.json(empresas)
        })
        .catch((erro) => {
            console.log(erro)
        })

}

// login empresa
module.exports.empresaLogada = (request, response) => {

    const email = req.body.email
    const senha = req.body.senha
    
    EmpresaModel.findOne({email: email})
        .then((empresa) => {
            if(!empresa) return response.status(400).json({message: 'usuario não existe!'})
            if(senha !== empresa.senha) return response.status(403).json({message: 'senha incorreta, tente novamente!'})

            response.json(empresa)
        })
        .catch(console.log)
    
}

// criar empresa
module.exports.criarEmpresa = (request, response) => {

    EmpresaModel.create(request.body)
        .then((data) => {
            console.log('Empresa cadastrada! ')
            console.log(data)
            response.json(data)
        })
        .catch((erro) => {
            console.log(erro)
        })
};

// cadastrar material
module.exports.cadastrarMaterial = (request, response) => {
    const id = request.params.id

    EmpresaModel.findById(id)
        .then((empresa) => {

            empresa.materiais.push(request.body)

            empresa.save()
                .then(() => {
                    console.log('novoa', empresa)
                    response.json(empresa)
                })
                .catch(console.log)
        })
        .catch(console.log)

    console.log(request.body)
    // response.json(request.body)
}
