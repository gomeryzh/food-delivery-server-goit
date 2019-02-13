const fs = require("fs");
const path = require("path");

const saveUser = user => {
  const userName = user.username;
  const filePath = path.join(__dirname, "../../db/users", `${userName}.json`);
  fs.writeFile(filePath, JSON.stringify(user), err => {
    if (err) throw err;
    console.log("It's saved!");
  });
};

const signupRoute = (request, response) => {
  if (request.method === "POST") {
    let body = "";

    request.on("data", function(data) {
      body += data;

      console.log("Incoming data!!!!");
    });

    request.on("end", function() {
      console.log(body);
      const user = JSON.parse(body);
      console.log(user);

      saveUser(user);
      response.writeHead(200, {
        "Content-Type": "application/json"
      });
      response.write(JSON.stringify(user));
      response.end();
    });
  }
};

module.exports = signupRoute;
