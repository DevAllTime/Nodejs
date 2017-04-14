/**
 * Created by Sam-Mac on 4/13/17.
 */
var express = require('express');
var path = require('path');
var router = express.Router();
var app = express();

//Middleware

router.get('/index1.html',(request,response,next)=>{
    response.send("hello world");
});

module.exports = router;