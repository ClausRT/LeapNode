var mongoose = require('mongoose')
  , config = {
      volunteer: mongoose.Schema.Types.ObjectId,
      gestureName: String,
      frame: String
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('Frames', schema);