var http = require ('http')
  , mongoose = require ('mongoose')
  , express = require ('./config/express.js')   //Esse não é o modulo Express e sim uma função que o chama e o configura
  , app = express()
  ;

//need your own file on config folder and need better coniguration
mongoose.connect('mongodb://localhost/frames');

http.createServer(app).listen(3000, function () {
    console.log('Express escutando a porta ' + 3000);
});