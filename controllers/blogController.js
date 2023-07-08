const Blog = require('../models/blog');


const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err)
        })
};

const create_blog_post = (req, res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((reult) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
};

const create_blog_get = (req, res) => {
    res.render('create', {title: 'Create new blog'});
};

const single_blog = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details'})
        })
        .catch((err) => {
            console.log(err);
        })
};

const delete_blog = (req, res) => {
    const id = req.params.id;
    
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  };


  module.exports = {
    blog_index,
    create_blog_post,
    create_blog_get,
    single_blog,
    delete_blog
  }