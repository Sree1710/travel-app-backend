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

app.get("/viewt",async(request,response)=>{
    let result=await travelModel.find()
    response.json(result)
})

app.post("/searcht",async(request,response)=>{
    let data=request.body
    let result=await travelModel.find(data)
    response.json(result)
})








app.listen(3001,()=>{
    console.log("Server is running")
})