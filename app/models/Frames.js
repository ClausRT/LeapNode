var mongoose = require('mongoose')
  , config = {
      volunteerName: String,
      gesture: String,
      currentFrameRate: Number,
      fingers: []
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('Frames', schema);