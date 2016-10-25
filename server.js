var http = require ('http')
  , mongoose = require ('mongoose')
  , express = require ('./config/express.js')   //Esse não é o modulo Express e sim uma função que o chama e o configura
  , app = express()
  , env = require ('./config/environment.js')[app.get('env')]   //Get the NODE_ENV and use it to get the local variables object
  ;

//need your own file on config folder and need better coniguration
mongoose.connect('mongodb://localhost/frames');

http.createServer(app).listen(env.port, function () {
    console.log('Application start listen port ' + env.port);
});