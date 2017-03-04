//Require dependencies

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article.js")
// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static(process.cwd() + "/public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

//routes

app.get('/', function(req, res){
  res.sendFile(processs.cwd() + '/public/index.html');
});
//to get 
app.get('/api/saved', function(req, res){
  Article.find({}, function(err,docs){
    if(err){
      console.log(err);
    }
    else{
      res.json(docs);
    }
  });
});
//to post
app.post('/api/saved', function(req, res){
  var entry = new Article(req.body);
  entry.save(function(err, doc){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
});

//to delete 

app.post('/api/delete/:articleID', function(req, res){
  console.log();
  Article.findByIdAndRemove(req.params.articleId, function(err, del){
    if(err){
      console.log(err);
    }
    else{
      console.log("deleted");
    }
  });
});



var PORT = process.env.PORT || 8000;

app.listen(PORT, function() {
  console.log("App running on port " +PORT +"!");
});