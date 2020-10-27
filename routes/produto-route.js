const express = require('express');
const router = express.Router();

const produtoController = require('../controllers/produto-controller');

router.get('/', produtoController.teste);

module.exports = router;