const express = require('express');
const mongoose = require('mongoose');

const { criarEmpresa, cadastrarMaterial, listarEmpresas, empresaLogada, addNegociacoes, addNotificacoes } = require('../controller/controllerEmpresa');

const router = express.Router();

require('../models/EmpresaModel')
const EmpresaModel = mongoose.model('Empresa')

// listar empresas
router.get('/', listarEmpresas);

// logar empresas
//router.post('/login', empresaLogada);

// cadastro de Empresa (passa a rota primeiro depois a função)
router.post('/cadastrarEmpresa', criarEmpresa);

// cadastro de materiais
router.post('/:id/cadastrarMaterial', cadastrarMaterial);

// adicionar notificações: somar notificações e exibir mensagem
router.put('/:id/addNegociacoes', addNotificacoes);

// adicionar negociações: marcar material como doado
router.put('/:id/addNegociacoes/:idMaterial', addNegociacoes);

module.exports = router;