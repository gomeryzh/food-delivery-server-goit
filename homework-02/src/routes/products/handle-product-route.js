const sendProduct = require('./send-product');
const createProduct = require('./create-product');

const handleProductRoute = (req, res) => {
  let reqMethod = req.method;

  if ((reqMethod = 'GET')) {
    sendProduct(req, res);
    return;
  }

  if ((reqMethod = 'POST')) {
    createProduct(req, res);
  }
};

module.exports = handleProductRoute;
