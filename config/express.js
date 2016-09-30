var express = require ('express')
  //, load = require ('express-load')
  , consign = require ('consign')
  , hbs = require ('hbs')
  ;

module.exports = function () {
    var app = express();
    
    app.set('view engine', 'html');
    app.engine('html', hbs.__express);
    app.set('views', './app/views/');
    app.use(express.static('./public'));
    
    consign({cwd: 'app'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);
    
    return app;
}