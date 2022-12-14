var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrderSchema = new Schema(
  {
    short_desc: {type: String, required: true, maxLength: 100},
    desc: {type: String, required: true, maxLength: 100},
    some_num: {type: Number, required: true},
    date: {type: Date},
  }
);


//Export model
module.exports = mongoose.model('Order', OrderSchema);
