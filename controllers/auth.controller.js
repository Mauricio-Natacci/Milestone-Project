function getSignup(req, res) {
  res.render('customer/auth/signup');
}

function signup() {
  
}


function getLogin(req, res) {
  // ...
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup
};