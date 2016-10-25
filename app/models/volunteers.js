var mongoose = require('mongoose')
  , config = {
      volunteerName: {type: String},
      gestures: {type: String}  //Tipo temporario apenas para testes. Pesquisar a referencia correta para esse tipo.
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('Volunteers', schema);