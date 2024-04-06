// const http = require("http");
const fs = require("fs");
const express = require("express");
// const myServer = http.createServer((req, res) => {
//   console.log("Request received: ", req.headers);
//   const log = `${req.method} ${req.url} ${Date.now().toLocaleString()}\n`;
//   fs.appendFile("log.txt", log, (err, log) => {
//     res.end("Welcome to the server again!");
//   });
// });
const app = express();

app.get("/", (req, res) => res.send("Welcome to Homepage!"));
app.get("/about", (req, res) => res.send("Welcome to Aboutpage!" + req.query.user));

app.listen(3000, () => console.log("Server started"))

// const myServer = http.createServer(app);
// myServer.listen(3000, (err, res) => {
//   console.log("Server listening on");
// });
