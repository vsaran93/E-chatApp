const jwt = require("jsonwebtoken");
const config = require("../../config/vars");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({ auth: false, message: "No token provided" });
  }
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .json({ auth: false, message: "failed to authenticate token" });
    }
    req.userId = decoded.user.id;
    next();
  });
};

module.exports = verifyToken;