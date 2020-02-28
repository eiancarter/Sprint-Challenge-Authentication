/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets');
 
module.exports = (req, res, next) => {
  const { Authorization } = req.headers;

  if (Authorization) {
    jwt.verify(Authorization, jwtSecret, (err, decodedToken) => {
      if(err) {
        console.log(err)
        res.status(401).json({ you: 'shall not pass!' });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'cannot confirm credentials' });
  }
};
