const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
items = [
    {
        id:0, 
        name: "Toothbrush",
        description: "Really cool ToothBrush that leaves mouth minty fresh!",
        price: 88.99
    },
    {
        id:1, 
        name: "Dental Floss",
        description: "Really cool Dental Floss that leaves mouth minty fresh!",
        price: 29.13
    },
    {
        id:2, 
        name: "Bandaid",
        description: "Great to cover those scrapes!",
        price: 33.99
    },
    {
        id:3, 
        name: "Back Scratcher",
        description: "Reaches down to those spots where your wife doesnt want to hit",
        price: 22.42
    },
    {
        id:4, 
        name: "Pocket Knife",
        description: "Handy tool for all your outdoor needs!",
        price: 88.00
    },
    {
        id:5, 
        name: "Whoopie Cushion",
        description: "Makes funny sounds",
        price: 15.25
    },
    {
        id:6, 
        name: "Toothpick",
        description: "Cleans out the wings from friday night",
        price: 53.12
    },
    {
        id:7, 
        name: "Mask",
        description: "Keeps Covid away from your face",
        price: 400.00
    },
    {
        id:8, 
        name: "Helmet",
        description: "Keeps your brain safe",
        price: 48.88
    },
    {
        id:9, 
        name: "Solar Panel",
        description: "Keeps electricity when you dont want to pay electric bill!",
        price: 699.99
    }
]


app.get("/",(req,res)=>{
    res.send({title:"Shopping-API"})
})
app.get("/shoppinglist",(req,res)=>{
    res.send(items)
})
app.get("/shoppinglist/:id",(req,res)=>{
    let id = parseInt(req.params.id);
    let item = items.find(x=>x.id === id);
    res.send(item)
})
app.post("/checkout",(req,res)=>{
    res.send({title:"Thank you for purchase"})
})

app.listen(5000,()=>{
    console.log("hey")
})