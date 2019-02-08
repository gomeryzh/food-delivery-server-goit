const qs = require("querystring");

const saveUser = user => {
  // получить файл с юзером

  // найти путь папки users
  const userName = user.name;
  const filePath = fs.join("../../db/users/", `${userName}.json`);
  // сохранить туда файл
  fs.writeFile(filePath, JSON.stringify(user), err => {
    if (err) throw err;
    console.log("It's saved!");
  });
};

const userCreateRoute = (request, response) => {
  // Взять данные что пришли

  if (request.method === "POST") {
    let body = "";

    request.on("data", function(data) {
      body += data;

      console.log("Incoming data!!!!");
    });

    request.on("end", function() {
      const post = qs.parse(body);
      // use post['blah'], etc.
    });
  }

  // Взять username с данных, сохранить в переменную

  // Сохраняем данные в <username>.json

  // Сохранить <username>.json в папку users

  // Отправляем файл в ответе с данными юзера
  // использовать response
};

module.exports = userCreateRoute;
