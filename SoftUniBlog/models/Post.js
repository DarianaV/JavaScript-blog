const mongoose = require('mongoose');

let postSchema = mongoose.Schema(
    {
        content: {type: String, required: true},
        author:  {type: String, required: true, ref: 'User'},
        articles:{type: String, ref: 'Article'},

    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;