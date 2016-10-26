var mongoose = require('mongoose')
  , config = {
      volunteerName: String,
      gestures: mongoose.Schema.Types.ObjectId    //Eu acho que aqui era para ir um _ID. Conferir depois.
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('Volunteers', schema);