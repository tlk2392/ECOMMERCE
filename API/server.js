const express = require("express");
const path = require("path");
const email = require("./email")
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})
app.get("/send_email",(req,res)=>{
    const body=req.query;
    email.send_email(body.Email, body)
})
app.listen(5000,()=>{
    console.log("hey")
})