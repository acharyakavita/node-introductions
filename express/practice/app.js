const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome");
});

app.get("/speak/:animal", function(req, res) {
  switch (req.params.animal) {
    case "pig":
      res.send("The pig says 'Oink'");
      break;
    case "cow":
      res.send("The cow says Moo");
      break;
    case "dog":
      res.send("The dog says woof woof");
      break;
  }
});

app.get("/repeat/:text/:number", function(req, res) {
    let data='';
    for(let i=0;i<req.params.number;i++){
        data+=req.params.text+' '
    }
    res.send(data);
  });

  app.get("*", function(req, res) {
   
    res.send('sorry page not found');
  });

  app.listen('3000',function(){
    console.log('starting server')
  })