const express = require('express');
const router = express.Router();

const login = require('../middleware/login-middleware');

const produtoController = require('../controllers/produto-controller');

router.get('/',
    // login.required,
    produtoController.getProdutos
);

router.get('/:nome',
    login.required,
    produtoController.getProduto
);

module.exports = router;