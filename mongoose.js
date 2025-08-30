const mongoose=require('mongoose');


async function connection(){
    await mongoose.connect("mongodb+srv://bhagyashree6412:bhagya%4020172006@bhagya123.azicc3d.mongodb.net/backend")
}

 const userschema=new mongoose.Schema({
    username:{
         type:String, 
         required:true,
         unique:true, 
         minlength:3 
        },
  email:{
     type:String, 
     required:true,
     unique:true,
    },
  password:{ 
    type:String,
    required:true, 
    minlength:6 
    },
  createdAt:{ 
    type:Date, 
    date:Date.now()
    }

 })

 let usermodel=mongoose.model('users',userschema);

 const taskschema=new mongoose.Schema({
    title:{
         type:String,
         required:true,
         maxlength:100 
        },
  description:{ 
    type:String,
    maxlength:500 
    },
  status:{ 
    type:String, 
    enum:['pending', 'in-progress', 'completed'], 
    default:'pending'
    },
  priority:{
     type:String, 
     enum:['low', 'medium', 'high'],
     default:'medium'
    },
  userId:{ 
    type:'ObjectId', 
    ref:'User', 
    required:true
     },
  createdAt:{
    type:Date, 
    date:Date.now()
    },
  updatedAt:{ 
    type:Date, 
    date:Date.now()
 }

 })
 let taskmodel=mongoose.model('task',taskschema);
 console.log("db connected ")
