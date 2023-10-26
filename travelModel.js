const mongoose=require('mongoose')
const travelModel=mongoose.model("travels",mongoose.Schema(
    {
        packID:{type:String,required:true},
        packTitle:String,
        packDescription:String,
        packImg:String,
        packDuration:String,
        packRate:String
    }
))
module.exports=travelModel