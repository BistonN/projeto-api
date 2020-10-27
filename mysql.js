var mysql = require('mysql');
const api_config = require('./utils').getApiConfig();

const pool = mysql.createPool({
    "user": api_config.web_mysql_user,
    "password": api_config.web_mysql_password,
    "database": api_config.web_mysql_database,
    "host": api_config.web_mysql_host,
    "port": api_config.web_mysql_port
});

const pool_multi = mysql.createPool({
    "user": api_config.web_mysql_user,
    "password": api_config.web_mysql_password,
    "database": api_config.web_mysql_database,
    "host": api_config.web_mysql_host,
    "port": api_config.web_mysql_port,
    "multipleStatements": true
});

exports.execute = (query, params = [], var_pool = pool) => {
    return new Promise((resolve, reject) => {
        var_pool.query(query, params, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

exports.pool = pool;
exports.pool_multi = pool_multi;