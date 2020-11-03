const express = require('express');
const router = express.Router();

const login = require('../middleware/login-middleware');

const usuarioController = require('../controllers/usuario-controller');

router.post('/',
    usuarioController.registrarUsuario
);

module.exports = router;