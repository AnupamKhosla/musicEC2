"use strict";
import express from 'express';
import path from 'path';
import cors from "cors";
//import "./loadEnvironment.mjs";
//import "express-async-errors";
//import posts from "./routes/posts.mjs";
//import db from "./db/conn.mjs";


var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
var productionDir = path.join(path.resolve(),'public');
app.use(express.static(productionDir));



app.get('/hello', function(req, res) {
  res.send('Hello World');
});


//app.get('/posts', posts);

app.listen(port);

export default app;

