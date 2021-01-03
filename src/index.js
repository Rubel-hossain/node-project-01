const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello Express Js </h1>");
});

app.listen("8080",()=>{
    console.log("servier running in 8080");
});