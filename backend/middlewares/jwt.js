const jwt = require("express-jwt");

console.log("firstfirstfirstfirstfirstfirst", jwt);
const secret = process.env.JWT_SECRET;

const authenticate = jwt({
	secret: secret
});

module.exports = authenticate;