const router = require('express').Router();
const {
   registerUser, loginUser, logout
} = require('../controllers/register');

router.post('/registration', registerUser);
router.post('/login', loginUser);
router.get('/', logout)

module.exports = router;
