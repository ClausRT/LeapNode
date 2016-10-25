var mongoose = require('mongoose')
  , config = {
      gestureName: {type: String},
      frame: {type: String}     //Tipo temporario apenas para testes. Procurar um tipo que realmente exista e satisfaça a necessidade.
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('Frames', schema);