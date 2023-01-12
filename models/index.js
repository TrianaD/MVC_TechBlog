const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User to Post relationship, user can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
});


// Post is owned by a user
Post.belongsTo(User, {
  foreignKey: 'user_id'
});


// comment is owned by a user
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true,

});

// comments owned by a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true,

});

// user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade',
    hooks:true, 
});

//posts can contain many comments 
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade',
    hooks:true, 
});




module.exports = { User, Post, Comment };