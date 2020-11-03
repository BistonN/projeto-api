const jwt = require('jsonwebtoken');

exports.optional = (req, res, next) => {
    res.locals.id_usuario = 0;
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        res.locals.id_usuario = req.userData.id_usuario;
        next();
    } catch (error) { next(); }
};

exports.required = (req, res, next) => {
    res.locals.id_usuario = 0;
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decoded;
        res.locals.id_usuario = req.userData.id_usuario;
        next();
    } catch (error) {
        return res.status(401).send({
            message: 'Usuário não autenticado.'
        });
    }
};