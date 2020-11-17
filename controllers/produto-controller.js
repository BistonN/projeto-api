const mysql = require('../mysql');

exports.getProdutos = async (req, res) => {
    try {
        const results = await mysql.execute(`
            SELECT * FROM produtos;`,
            []);
        return res.status(200).send({ response: results });

    } catch (error) {
        utils.getError(error);
        return res.status(500).send({ error: error });
    }
}

exports.getProduto = async (req, res) => {
    try {
        const results = await mysql.execute(`
            SELECT * FROM produtos WHERE nome = ?;`,
            [req.params.nome]);
        return res.status(200).send({ response: results });
    } catch (error) {
        utils.getError(error);
        return res.status(500).send({ error: error });
    }
}