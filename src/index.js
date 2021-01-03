const express = require('express');
const path = require('path');
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname,"../","public")));
app.get("/",(req,res)=>{
    res.send("<h1>Hello Express Js </h1>");
});

app.listen("8080",()=>{
    console.log("servier running in 8080");
});

app.use((req,res,next)=>{
    const error = new Error("404 page not found");
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    console.log(res.status);
    if(error.status == 404){
        res.render("errors/404.ejs");
    }
})