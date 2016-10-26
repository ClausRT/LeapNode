var http = require ('http')
  , db = require ('./config/database.js')
  , express = require ('./config/express.js')   //Esse não é o modulo Express e sim uma função que o chama e o configura
  , app = express()
  , env = require ('./config/environment.js')[app.get('env')]   //Get the NODE_ENV and use it to get the local variables object
  ;

db(env.db, false);    //Inicia conexão com o servidor.

http.createServer(app).listen(env.port, function () {
    console.log('Application start listen port ' + env.port);
});