//demo bcrypt
const express=require('express');
//step 1
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const dotenv=require('dotenv');
const jwt=require('jsonwebtoken');
dotenv.config();
const app=express();
app.use(express.json());
const port=3000;
async function hashing(){
    let password="hello123"

    let hashpassword=await bcrypt.hash(password,10);
    console.log(hashpassword);
}
hashing();
const SECRET='mysecret';
const USER ={username:"test",password:"34455"};
app.post('./login',(req,res)=>{
    const{username,password} = req.body;
    if(username === USER.username && password === USER.password) 
    return res.json({token:jwt.sign({username},SECRET,{expiresIn:'1h'})})
res.sendStatus(401);
})
app.get('./protected',(req,res)=>{
    jwt.verify((req.headers.authorization || '').split(' ')[1], SECRET, (err, user) =>
    err ? res.sendStatus(403) : res.json({ message: 'Protected data', username })
  );
});
app.listen(port,function(){
    console.log(`the server is running on ${port}`)
})