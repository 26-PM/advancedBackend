const fs = require('node:fs');
// Write File
fs.writeFile("1.txt","Hello World!",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully");
        }
})
// Append File
fs.appendFile("1.txt","Hello World! from append.",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File created successfully");
        }
})