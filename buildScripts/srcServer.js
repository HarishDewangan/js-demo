//var express = require('express');
//var path = require('path');
//ar open = require('open');

import express from 'express';
import path from 'path';
//import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

//var port= 3000;
//var app = express();
/* eslint-disable no-console */

const port  = 3000;
const app = express();
const compilier = webpack(config);

app.use(require('webpack-dev-middleware')(compilier,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.get("/",function(request,response) {
    response.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(err){
    if(err) {   
        console.log(err);
    }
});