/**
 * Created by Sam-Mac on 4/13/17.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();

//Middleware

router.get('/',(request,response)=>{
    response.render('home',{title: 'from home'});
});

router.get('/about',(request,response)=>{
    response.render('about',{title: 'About Page'});
});

router.get('/config',(request,response)=>{
    response.render('config',{title: 'Config Page'});
});

module.exports = router;