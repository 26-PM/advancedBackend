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

app.get("/error",function(req,res,next){
    return next(new Error("/error is under maintenance."));
});


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })
  
app.listen(3000);