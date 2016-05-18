var http = require ('http')
  , express = require ('./config/express.js')   //Esse não é o modulo Express e sim uma função que o chama e o configura
  , app = express()
  ;

http.createServer(app).listen(3000, function () {
    console.log('Express escutando a porta ' + 3000);
});