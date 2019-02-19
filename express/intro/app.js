const express=require('express');
let app=express();

app.get('/',function(req,res){
    res.send('Hi there')
});

app.get('/bye',function(req,res){
    res.send('Bye there')
});

app.get('/dog',function(req,res){
    res.send('Woof')
});
app.get('/r/:subreddit',function(req,res){
    let sub=req.params.subreddit
    res.send('welcome to '+ sub + ' subreddit')
});

app.get('/r/:subreddit/comments/:id/:title/',function(req,res){
    res.send('welcome to subreddit comments page')
});
app.get('*',function(req,res){
    res.send('You are a star')
});

app.listen(3000,function(){
    console.log('Server has started')
})