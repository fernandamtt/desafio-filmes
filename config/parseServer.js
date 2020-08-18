const ParseServer = require('parse-server').ParseServer;

const api = ParseServer({
    databaseURI:'mongodb://localhost:27017/locadora',
    appId:'filmesEmHd',
    masterKey:'secret',
    serverURL:'http://localhost:1337/parse'
});

module.exports = api;