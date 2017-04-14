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

module.exports = router;