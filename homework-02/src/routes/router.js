const mainRoute = require('./main/mainRoute');
const productRoute = require('./products/products');
const signupRoute = require('./signup/signup');
// const sendProduct = require('./products/send-product');
const handleProductRoute = require('./products/handle-product-route');

const router = {
  '/products': productRoute,
  '/signup': signupRoute,
  '/products': handleProductRoute,
  default: mainRoute
};

module.exports = router;
