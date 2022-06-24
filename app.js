const express=require("express")
const mysql=require('mysql')

const app=express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"Joblo"
  });

  db.connect((err)=>{
    if (err) throw err;
    console.log("connected")
  })


  app.get("/", (req,res)=>{
    console.log("Welcome to beginning of nothingness")
  })

  app.listen("8080",()=>{
    console.log("server started at 8080")
  })

