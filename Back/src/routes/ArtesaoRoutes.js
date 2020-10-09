const express = require('express');
const router = express.Router();

// cadastro de Pessoa física
router.post('/cadastrarPessoaf', (request, response) => {
    console.log(request.body)
    response.json(request.body)
});


module.exports = router;