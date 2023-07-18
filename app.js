//import
import express from 'express';
import path from 'path';



//var express = require('express');
var port = process.env.PORT || 3000;
var app = express(),
//path = require('path'),
productionDir = path.join(path.resolve(),'public');
//publicDir = path.join(__dirname,'public');

app.use(express.static(productionDir));

app.listen(port);

//module.exports = app;
//export
export default app;