//first http server
const express = require('express')
const app=express();
const port=3000
app.get('/health',function(req,res){
res.send(" i am well");  
})

app.listen(port,function(){
    console.log(`the sever is running on ${port}`)
})