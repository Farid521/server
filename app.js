const express = require("express");
const app = express();
const port = 3000;

const procces = require("./middleware/procces.js");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/mainPost", procces);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
