const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {

    const bearer = req.headers["authorization"];
  
    if (typeof bearer == "undefined") {
      res.status(403).json({ message: "unauthorised user" });
      
    } else {
      try {
        const fullbearer = bearer.split(" ");
        req.webToken = fullbearer[1];
        req.user = jwt.verify(fullbearer[1], process.env.JWT_SECRET);
        // console.log(req.user.id);
        next();
      } catch (err) {
        res.status(403).json({ message: "invalid token" });
        console.log(err);
      }
    }
  };
  module.exports = protect;
  