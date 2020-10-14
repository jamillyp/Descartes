const express = require('express');
const mongoose = require('mongoose');
const { criarEmpresa, cadastrarMaterial, listarEmpresas, empresaLogada } = require('../controller/controllerEmpresa');
const router = express.Router();

require('../models/EmpresaModel')
const EmpresaModel = mongoose.model('Empresa')

// listar empresas
router.get('/', listarEmpresas);

// logar empresas
router.post('/login', empresaLogada);

// cadastro de Empresa (passa a rota primeiro depois a função)
router.post('/cadastrarEmpresa', criarEmpresa);

// cadastro de materiais
router.post('/:id/cadastrarMaterial', cadastrarMaterial);

module.exports = router;