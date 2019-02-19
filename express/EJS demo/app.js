const express = require("express");
const app = express();
app.use(express.static("public"));
app.set('view engine','ejs')

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/love/:thing", function(req, res) {
  let thing = req.params.thing;
  res.render("love", { thing: thing });
});

app.get("/posts", function(req, res) {
  let posts = [
    { title: "post1", author: "susy" },
    { title: "post2", author: "susy2" },
    { title: "post3", author: "susy3" }
  ];
  res.render("posts", { posts: posts });
});
app.listen("3000", function() {
  console.log("server started");
});
