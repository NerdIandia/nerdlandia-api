const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(400).json({ message: "Have to be a authorization"});
  }

  const [, token] = authorization.split(" ");

  try {
    const user = await jwt.verify(token, "secret");

    req.user = user;

    console.log(user);

    return next();
  } catch (error) {
    if(!authorization) {
      return res.status(400).json({ message: error});
    }
  }
}