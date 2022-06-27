const express=require("express")
const mysql=require('mysql')



const db=mysql.createConnection({
  host:"aws-sample-db.cko4fkw4kocs.ap-south-1.rds.amazonaws.com",
  user:"admin",
  password:"Praveen123",
  port:"3306",
  database:"sampledb"

})

db.connect((err)=>{
  if (err) throw err
  console.log("connected")
})

const app=express()



 

