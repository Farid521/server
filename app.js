const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post('/mainPost', (req,res) => {
    console.log('post reached')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
