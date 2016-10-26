var mongoose = require('mongoose');

module.exports = function (uri, debug) {
    mongoose.connect(uri);
    mongoose.set('debug', debug);  //Debbuger do Mongoose
    
    mongoose.connection.on('connected', function () {
        console.log('Mongoose connected at ' + uri);
    });
    
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose disconnected from ' + uri);
    });
    
    mongoose.connection.on('error', function (erro) {
        console.log('Mongoose connection error: ' + erro);
    });
    
    //Se a aplicação for encerrada, a conexão do mongoose com o banco de dado é encerrada também
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose disconnected by the terminate of application');
            process.exit(0);
        });
    });
}