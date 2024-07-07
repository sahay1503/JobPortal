const express = require('express');
 const { signin,signup,logout, userProfile } = require('../controllers/authController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const router = express.Router();


//auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/logout
router.get('/me',isAuthenticated,isAdmin,userProfile);

module.exports = router;