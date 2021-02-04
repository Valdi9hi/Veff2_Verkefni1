"use strict";

var express = require('express');

var app = express();
var host = "127.0.0.1";
var port = 3000; //Static files

app.use(express["static"]('public'));
app.use('/styles', express["static"](__dirname + 'public/styles'));
app.use('/js', express["static"](__dirname + 'public/js'));
app.use('/videos', express["static"](__dirname + 'public/img')); //Templating Engine

app.set('views', './src/views');
app.set('view engine', 'ejs'); // Routes

var videoRouter = require('./videos');

app.use('/', videoRouter); //Hlusta á port 3000;

app.listen(port, host, function () {
  console.log("Server @ https://".concat(host, ":").concat(port, "/"));
}); //Villumeðhöndlun
//function notFoundHandler(req, res, next){
//const title = "Fannst ekki";
//const message = "Obb, þú ert í svolitlum bobba!";
//    res.status( 04).render('error',{title, message});
//}
//
//function errorHandler(err, req, res, next){
//    console.log(err);
//    const title = "Fannst ekki";
//    const message = "Arg";
//    res.status(500).render("error", {title, message});
//}
//
//app.use(notFoundHandler);
//app.use(errorHandler);