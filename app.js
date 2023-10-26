const express=require('express')
const bodyParser=require('body-parser')
const Cors=require('cors')
const mongoose=require('mongoose')
const travelModel = require('./travelModel')

const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(Cors())

mongoose.connect("mongodb+srv://sreelekshmisl1710:Dharithri@cluster0.y83cozw.mongodb.net/travelDB?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/addt",async(request,response)=>{
    let data=request.body
    const travel=new travelModel(data)
    let result=await travel.save()
    if (result.packID!="") {
       response.json({"status":"success"}) 
    } else {
       response.json({"status":"error"})
    }
})











app.listen(3001,()=>{
    console.log("Server is running")
})