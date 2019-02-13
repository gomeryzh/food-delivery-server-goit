const http = require("http");
const url = require("url");

const morgan = require("morgan");
const router = require("./routes/router");
const logger = morgan("combined");

const startServer = port => {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const route = router[parsedUrl.pathname] || router.default;

    logger(req, res, () => route(req, res));
  });

  server.listen(port);
};

module.exports = startServer;
