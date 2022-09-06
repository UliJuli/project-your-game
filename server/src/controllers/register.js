const bcrypt = require('bcrypt');
const { User, Statistic } = require('../../db/models');

const registerUser = async (req, res) => {
  console.log('register', req.body);
  const { username, useremail, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 5);
    const newUser = await User.create({ name: username, email: useremail, password: hashPass });
    const userId = newUser.id;
    req.session.newUser = { id: newUser.id, name: username };
    await Statistic.create({ user_id: userId, score: 0 });
    return res.status(301).json({
      id: newUser.id,
      name: username,
      email: useremail,
    });
  } catch (err) {
    console.log('Ахтунг юзер не создан ===> ', err.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('login', req.body);
  const newUser = await User.findOne({ where: { email } });
  if (newUser) {
    const isValidPassword = await bcrypt.compare(password, newUser.password);
    if (isValidPassword) {
      req.session.newUser = { id: newUser.id, name: newUser.name }; // create cookie and write to DB session storage
      res.json({
        id: newUser.id,
        name: newUser.name,
      });
    }
  } else {
    const textError = 'Не верное имя пользователя или пароль';
    console.log(textError);
  }
};

const logout = async (req, res, next) => {
  console.log(req.session);
  req.session.destroy();
  res.clearCookie('login');
  res.end();
};


module.exports = {
  registerUser, loginUser, logout,
};
