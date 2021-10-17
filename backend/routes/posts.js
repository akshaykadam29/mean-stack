const express = require('express');
const checkAuth = require('./../middleware/check-auth');
const extractFile = require('./../middleware/file');

const postsController = require('./../controllers/posts');

const router = express.Router();

// ADD POST
router.post('', checkAuth, extractFile, postsController.createPost);

// GET ALL POSTS
router.get('', postsController.getAllPosts);

// GET SINGLE POST
router.get('/:id', postsController.getSinglePost);

// UPDATE POST
router.put('/:id', checkAuth, extractFile, postsController.updatePost);

// DELETE POST
router.delete('/:id', checkAuth, postsController.deletePost);

module.exports = router;
