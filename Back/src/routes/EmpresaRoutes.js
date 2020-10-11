const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

require('../models/EmpresaModel')
const EmpresaModel = mongoose.model('Empresa')

// cadastro de Empresa
router.post('/cadastrarEmpresa', (request, response) => {
    // console.log(request.body)    
    // response.json(request.body)

    EmpresaModel.create(request.body)
        .then((data) => {
            console.log('usuario cadastrado! ')
            console.log(data)
            response.json(data)  
        })
        .catch((erro) => {
            console.log(erro)
        })
    
});

// cadastro de materiais
router.post('/:id/cadastrarMaterial', (request, response) => {

    //EmpresaModel.find()
        //.then((data) => {
        //    console.log('material cadastrado! ')
        //    console.log(data)
        //    console.log(request.body)
        //    response.json(request.body)
        //    response.json(data)
        //})
        //.catch((erro) => {
        //    console.log(erro)
        //})

    // EmpresaModel.findById(id)
    //     .then((data) => {
    //         data.materiais.push({nome: 'igo'})
    //         data.save()
    //             .then(()=> {
    //                 console.log(data)
    //                 response.json({ok: 'ok', data})
    //             })
    //             .catch(console.log)
    //     })
    //     .catch(console.log)
    
    console.log(request.body)
    response.json(request.body)
});

module.exports = router;