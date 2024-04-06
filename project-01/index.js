const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;
app.listen(PORT, console.log("Server started"));

app.get("/api/users", (req, res) => {
  return res.json(users);
});
app.get("/users", (req, res) => {
  // console.log(req);
  // const user = users[0].first_name;
  // const html = `
  // <h1>${user}</h1>
  // `;

  const html = `
        ${users.map((user) => `<h5>${user.first_name}</h5>`).join("")}
    `;

  return res.send(html);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.send(user);
});
