const express = require("express");
const app = express();

// app.use(express.static("public"));

// Middleware 
app.use(function (req, res, next) {
    console.log("Hello from middleware");
    next();
});

app.get("/", function (req, res) {
    res.send("Hello World!");
}); 

app.listen(3001);