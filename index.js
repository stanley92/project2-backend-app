const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("I am at homeeee!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
