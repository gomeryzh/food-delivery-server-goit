const mainRoute = require("./main/mainRoute");
const productRoute = require("./products/products");
const signupRoute = require("./signup/signup");

const router = {
  "/products": productRoute,
  "/signup": signupRoute,
  default: mainRoute
};

module.exports = router;
