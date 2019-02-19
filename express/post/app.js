const express = require("express");
const app = express();
const bodyParser=require('body-parser')
let friends = ["a", "b", "c"];

app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/friends", function(req, res) {
  res.render("friends", { friends: friends });
});

app.post('/addFriend',function(req,res){
    friends.push(req.body.newFriend)
    res.redirect('/friends')
})
app.listen("3000", function() {
  console.log("server running");
});
