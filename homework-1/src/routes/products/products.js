const fs = require("fs");
const path = require("path");

const products = (req, res) => {
  const productsPath = path.join(
    __dirname,
    "../../db/products/",
    "all-products.json"
  );

  fs.readFile(productsPath, function(err, products) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });
    res.write(products);
    res.end();
  });
};

module.exports = products;
