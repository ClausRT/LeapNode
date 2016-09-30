var mongoose = require('mongoose')
  , config = {
      timestamp: {type: Date, default: Date.now()},
      gestureName: String,
      collaborator: String,
      frames: [String]
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('Frames', schema);