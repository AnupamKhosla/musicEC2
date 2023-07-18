"use strict";
import express from 'express';
import path from 'path';
import cors from "cors";
import "./loadEnvironment.mjs";
//import "express-async-errors";
//import posts from "./routes/posts.mjs";
//import db from "./db/conn.mjs";
//console.log(db);
//throw new Error("Test Error");

var port = process.env.PORT || 3000;
var app = express();
app.use(cors());
var productionDir = path.join(path.resolve(),'public');
app.use(express.static(productionDir));

// var db_password = process.env.ATLAS_URI || "ATLAS_URI_IS_UNDEFINED";

// app.get('/hello', function(req, res) {
//   res.send(db_password);
// });


//app.get('/posts', posts);

app.listen(port);

export default app;

