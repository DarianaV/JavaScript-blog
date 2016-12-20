const Post = require('mongoose').model('Post');

module.exports = {
commentPost: (req, res)=> {

    let postArgs = req.body;
    let errorMsg = '';
    if (!req.isAuthenticated()) {
        errorMsg = 'You should be logged in to make post!'
    }
    else if (!postArgs.content) {
        errorMsg = 'Post content cannot be empty';
    }

    if (errorMsg) {
        res.render('article/details', {error: errorMsg});
    } else {
        Post.findById(id).populate('article author').then(article => {
            if (postArgs.author = req.user.id) {

            }
        })
    }
  }
};



