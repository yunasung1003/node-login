"use strict";

//app 을 불러옴
const app = require("../app");

const PORT = 3000;


app.listen(PORT, ()=> {
    console.log("서버가동");
})