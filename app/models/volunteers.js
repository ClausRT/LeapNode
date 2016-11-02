var mongoose = require('mongoose')
  , config = {
      volunteerName: String,
      gestures: {type: [mongoose.Schema.Types.ObjectId], ref: 'Gestures', required: true}
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('Volunteers', schema);