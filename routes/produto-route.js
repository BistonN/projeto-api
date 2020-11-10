const express = require('express');
const router = express.Router();

const login = require('../middleware/login-middleware');

const produtoController = require('../controllers/produto-controller');

router.get('/',
    login.required,
    produtoController.teste
);

module.exports = router;