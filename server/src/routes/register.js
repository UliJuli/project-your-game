const router = require('express').Router();
const {
  renderRegister, registerUser, loginUser, logout,
} = require('../controllers/register');

router.route('/register')
  .get(renderRegister)
  .post(registerUser);

router.route('/login')
  .post(loginUser);
router.route('/logout')
  .get(logout);

module.exports = router;
