const fs = require("fs");

// fs.writeFile("test.js", "console.log('hello world')", (err, result) => {
//   console.log(result);
// });

// fs.writeFileSync("./test.js", "console.log('hello world");

// fs.readFile("hello.js", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })

fs.appendFile("./test.js", "console.log('Hello from fs4')\n", (err, result) => {
  if (err) throw err;
  console.log(result);
});
