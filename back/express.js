// const express = require('express')
import express from "express";
const app = express()
app.use(express.json())
const port = 8000
const data = [
  { id: 1, name: 'Ankita', age: 28 },
  { id: 2, name: 'Surbhi', age: 29 },
  { id: 3, name: 'Nihit', age: 18 },
  { id: 4, name: 'Garvit', age: 25 }
];

app.get('/', (req, res) => {
  res.status(200).json(data)
  res.json(data)
});

app.post("/submit", (req, res) => {
  console.log(req.body)
  const newData = req.body
  data.push(newData)
  res.json(data)
});

app.put("/update/:id", (req, res) => {
  const idFromURL = Number(req.url.split("update/")[1])
  const updateData = data.map((obj, index) => {
    if (obj.id === idFromURL) {
      obj = req.body;
      return obj
    }
    else return obj
  })
  res.json(updateData)
})
app.patch("/update/:id", (req, res) => {
  const idFromURL = Number(req.url.split("update/")[1])
  const updatedData = data.map((obj) => {
    if (obj.id === idFromURL) {
      
      for (let key in req.body) {
        // console.log(key)
        if (key in obj) {
          obj[key] = req.body[key]; 
        }
      }
    }
    return obj; 
  });
  res.json(updatedData); 
});

app.listen(port, () => {
  console.log("Server Started");
})