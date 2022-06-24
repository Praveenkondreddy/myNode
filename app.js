const express=require("express")
const mysql=require('mysql')

const app=express()



 


  app.get("/", (req,res)=>{
    console.log("Welcome to beginning of nothingness")
  })

  app.listen("8080",()=>{
    console.log("server started at 8080")
  })

