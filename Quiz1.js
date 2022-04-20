const { query } = require('express');
const express= require('express');
const app =express();


app.get('/chocolate',(req,res)=>{
    let num1=req.query.num1;
    let num2=req.query.num2;

    res.send(
      `<h1><i>You eat the ${num1} white chocolate and the ${num2} kakaoiee chocolate</i></h1>`
    );

   
})

app.listen("4444" , (req,res)=>{
console.log("Running on the port of 4444");
});
