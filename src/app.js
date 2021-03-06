"use strict";
//모듈
const express = require("express");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱 셋팅
app.set("views", "./src/src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))

app.use("/", home); // use -> 미들웨어를 등록해주는 메소드.


module.exports = app;