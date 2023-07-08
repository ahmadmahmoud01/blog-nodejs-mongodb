const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

// index
router.get('/', blogController.blog_index);

//store blog in db
router.post('/', blogController.create_blog_post);

// create view
router.get('/create', blogController.create_blog_get); 

// show single blog
router.get('/:id', blogController.single_blog); 

// delete blog
router.delete('/:id', blogController.delete_blog);

module.exports = router;
