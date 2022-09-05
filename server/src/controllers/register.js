const bcrypt = require('bcrypt');
const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/Register');
const { User } = require('../../db/models');


const registerUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    // const passCheck = await bcrypt.compare(password, user.password);
    if (user) {
      res.json({ user: 'register' });
    } else {
      const hash = await bcrypt.hash(password, 15);
      const newUser = await User.create({ login, password: hash });
      req.session.newUser = newUser;
      req.session.save(() => {
        res.json(newUser);
      });
    }
  } catch (error) {
    console.log('Регистрация в БД не удалась', error);
  }
};

const loginUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    const passCheck = await bcrypt.compare(password, user.password);
    if (passCheck) {
      req.session.newUser = user;
      req.session.save(() => {
        res.json({ login: 'ok' });
      });
    } else {
      res.json({ login: 'not' });
    }
  } catch (error) {
    console.log('Авторизация через БД не удалась', error);
  }
};

const logout = async (req, res) => {
  try {
    if (req.session.newUser) {
      req.session.destroy(() => {
        res.clearCookie('login');
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    console.log('Не получилось выйти', error);
  }
};

module.exports = {
  renderRegister, registerUser, loginUser, logout,
};
