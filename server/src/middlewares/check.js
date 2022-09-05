const check = (req, res, next) => {
  if (req.session.newUser) {
    next();
  } else {
    res.redirect('/register');
  }
};

module.exports = { check };
