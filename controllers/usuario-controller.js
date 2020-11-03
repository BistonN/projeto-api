const mysql = require('../mysql');
const bcrypt = require('bcrypt');
const utils = require('./utils-controller');

exports.registrarUsuario = async (req, res, next) => {
    try {
        const verificarUsuario = await mysql.execute(`SELECT id_usuario FROM usuarios WHERE email=?;`, [req.body.email]);
        console.log('verificarUsuario', verificarUsuario);
        if (verificarUsuario.length >= 1) {
            return res.status(409).send({ message: 'E-mail já cadastrado!' });
        }
        else {

            bcrypt.hash(req.body.senha, 10, (err, hash) => {
                if (err) {
                    utils.getError(err);
                    return res.status(500).send({ error: err });
                }
                else {
                    res.locals.hash = hash;
                    console.log('senha: ', req.body.senha, res.locals.hash)
                    try {
                        const results = await mysql.execute(`
                                INSERT INTO usuarios
                                            (
                                            nome,
                                            email,
                                            senha,
                                            )
                                    VALUES (?,?,?);`, [req.body.nome, req.body.email, res.locals.hash]);
                        return res.status(200).send({ message: 'Usuário Cadastrado com Sucesso!' });
                    } catch (error) {
                        utils.getError(error);
                        return res.status(500).send({ error: error });
                    }
                }
            })
        }
    } catch (error) {
        utils.getError(error);
        return res.status(500).send({ error: error });
    }
}