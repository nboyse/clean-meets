var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var CommentSchema = new mongoose.Schema({
  text: String,
  date: { type: Date, default: Date.now() },
  posts_id: { type: ObjectId, ref: "posts"},
});

var Comment = mongoose.model('Comments', CommentSchema);

module.exports = Comment;
