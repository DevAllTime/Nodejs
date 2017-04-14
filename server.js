var express = require('express');
var path = require('path');
var route = express.Router();
var routerpath = require('./routes/route');
var hbs = require('express-handlebars');
var app = express();

//App engines
app.engine('hbs',hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname+'/views/layouts'}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');

//Routing the paths
app.use('/',routerpath);
//Static Files initialisation
app.use(express.static(path.join(__dirname,'/public')));

app.listen(3000,()=>{
    console.log("Listening on Port 3000");
});

