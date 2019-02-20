const express = require("express");
const app = express();
app.set("view engine", "ejs");
let request = require("request");

app.get("/", function(req, res) {
  res.render("search");
});

app.get("/results", function(req, res) {
  console.log(req.query.search);
  request(
    "http://www.omdbapi.com/?s="+req.query.search+"&apikey=thewdb",
    function(error, response, body) {
      if (!error && response.statusCode === 200) {
        results = JSON.parse(body);
        console.log(results);
        res.render("results", {results: results});
      }
    }
  );
});
app.listen("3000", function() {
  console.log("server running");
});
