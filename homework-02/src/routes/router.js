const mainRoute = require("./main/mainRoute");
const productRoute = require("./products/products");
const signupRoute = require("./signup/signup");
const getProduct = require("./products/get-product");

const router = {
  "/products": productRoute,
  "/signup": signupRoute,
  "/products/:{id}": getProduct,
  default: mainRoute
};

module.exports = router;
