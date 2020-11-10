const express = require('express');
const router = express.Router();
const login = require('../middleware/login-middleware');

const usuarioController = require('../controllers/usuario-controller');

router.post(
    '/cadastro',
    usuarioController.verificarUsuario,
    usuarioController.registrarUsuario
);

router.post(
    '/login',
    usuarioController.verificarUsuario,
    usuarioController.getUsuario,
    usuarioController.login
)

module.exports = router;