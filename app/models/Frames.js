var Frame = require('../../public/leapjs/lib/frame.js')
  , mongoose = require('mongoose')
  ;

console.log(Frame);
var schema = mongoose.Schema(Frame);

module.exports = mongoose.model('Frame', schema);