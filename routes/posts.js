import { error } from 'console';
import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js';
const router = express.Router();

// Get all posts
router.get('/', getPosts);

// Single post
router.get('/:id', getPost);

// Create new post
router.post('/', createPost);

// Updating post
router.put('/:id', updatePost);

// Delete Post
router.delete('/:id', deletePost);

export default router;