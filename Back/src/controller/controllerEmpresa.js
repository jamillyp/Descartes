const { response, request } = require('express');
const EmpresaModel = require('../models/EmpresaModel');

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

// incrementar negociações + doar material + excluir material doado do banco
module.exports.addNegociacoes = (request, response) => {
    const id = request.params.id
    const idMaterial = request.params.idMaterial

    EmpresaModel.findById(id)
        .then((empresa) => {

            empresa.negociacoes += 1
            
            empresa.materiais.forEach((mat, i) => {
                if(mat._id == idMaterial) {
                    console.log(`APAGOU - ${mat.tipoMaterial} - ${i}`)
                    empresa.materiais[i].remove()
                }
            });

            empresa.save()
                .then(()=>{
                    response.json(empresa)
                })
            
        })
}

// cadastrar material
module.exports.cadastrarMaterial = (request, response) => {
    const id = request.params.id

    EmpresaModel.findById(id)
        .then((empresa) => {

            empresa.materiais.push(request.body)

            empresa.save()
                .then(() => {
                    console.log('novo', empresa)
                    response.json(empresa)
                })
                .catch(console.log)
        })
        .catch(console.log)

    console.log(request.body)
}

// incrementar notificações 
module.exports.addNotificacoes = (request, response) => {
    const id = request.params.id
    //const idMaterial = request.params.idMaterial

    EmpresaModel.findById(id)
        .then((empresa) => {

            empresa.notificacao +=1

            console.log('notify--', empresa)
            
            empresa.save()
            .then(()=>{
                response.json(empresa)
            })

        });
}
