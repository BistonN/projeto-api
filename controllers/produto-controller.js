const mysql = require('../mysql');

exports.teste = async (req, res) => {
    try {
        const results = await mysql.execute(`
            show tables;`,
            []);
        return res.status(200).send({ response: results });
    } catch (error) {
        utils.getError(error);
        return res.status(500).send({ error: error });
    }
}