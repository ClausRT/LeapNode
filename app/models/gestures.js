//To do: Make more clear erro's message

var mongoose = require('mongoose')
  , config = {
      volunteer: {type: mongoose.Schema.Types.ObjectId, required: [true, 'Internal error on get volunteer._id']},
      gestureName: {type: String, required: [true, 'Error: try to save without gesture name.']},
      frames: {
          type: [String], 
          required: [true, 'Error: try to save without frames.'], 
          validate: {
              validator: function (value) {
                  return value.length >= 120;
              },
              message: 'Error: try to save too few frames'
          }
      }
  }
  , schema = mongoose.Schema(config)
  ;

module.exports = mongoose.model('BruteGestures', schema);