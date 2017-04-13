var express = require('express');
var path = require('path');
var route = express.Router();
var app = express();
var routerpath = require('./routes/route');

//Middleware
app.use(express.static(path.join(__dirname,'/public')));
app.use('/',routerpath);

app.engine('hbs',() => {

});
//Using routes


app.listen(3000,()=>{
    console.log("Listening on Port 3000");
});

