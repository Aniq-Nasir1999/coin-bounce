const express = require('express');
const authController = require('../controller/authController')
const blogController = require('../controller/blogController')
const commentController = require('../controller/commentController')
const auth = require('../middleware/auth')

const router = express.Router();

// router.get('/test', (req, res) => res.json({msg: 'Working!'}));

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout',auth, authController.logout);
router.get('/refresh', authController.refresh);

router.post('/blog', auth, blogController.create);
router.get('/blog/all', auth, blogController.getAll);
router.get('/blog/:id', auth, blogController.getbyId);
router.put('/blog', auth, blogController.update);
router.delete('/blog/:id', auth, blogController.delete);
router.post('/comment', auth, commentController.create);
router.get('/comment/:id', auth, commentController.getById)


module.exports = router;