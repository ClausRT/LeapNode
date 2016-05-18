var express = require ('express')
  , load = require ('express-load')
  , hbs = require ('hbs')
  ;

module.exports = function () {
    var app = express();
    
    app.set('view engine', 'html');
    app.engine('html', hbs.__express);
    app.set('views', './app/views/');
    app.use(express.static('./public'));
    
    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);
    
    return app;
}