var express = require('express');
var path = require('path')
var mongoose = require('mongoose'); 
var  config = require('./config/database');
var index = require('./routes/index');

//init app
var app = express();

//connection to database
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successfully connected to database');
});

//view engine
app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs');

//set public folder
app.use(express.static(path.join(__dirname , 'public')));

//set routes
app.use('/', index);

//start server
var PORT = 3000;
app.listen(PORT,function(){
    console.log("server is running at " +PORT);
});