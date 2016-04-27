var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
// creating a schema(data model)
// http://mongoosejs.com/docs/guide.html

var todo = new Schema({
  text:{default:'',type:String}
})

module.exports = mongoose.model('Todo', todo);
