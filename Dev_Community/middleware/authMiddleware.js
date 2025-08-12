const jwt = require("jsonwebtoken");

const authMiddleware = (req,res,next) => {
    const {authorization} = req.headers;
    console.log(authorization);

    const token = authorization.split(" ")[1];

    const tokenObject = jwt.verify(token, process.env.JWT_SECREET_KEY);

    const{_id} = tokenObject;
    next();
}

module.exports = {authMiddleware};