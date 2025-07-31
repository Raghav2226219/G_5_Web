const express = require("express");

const app = express();
const port = 3000;

const m1 = function(req,res,next){
    console.log("Middleware");
    next();
}

app.get("/",m1, (req, res) => {
  res.send("Hello World! 1");
});
app.post("/", (req, res) => {
  res.send("Hello World!  2");
});
app.put("/", (req, res) => {
  res.send("Hello World! 3");
});6

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});