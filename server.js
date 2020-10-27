const http = require("http");
const app = require('./app');
const api_config = require('./utils').getApiConfig();

const server = http.createServer(app);

server.listen( api_config.port || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});