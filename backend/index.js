const express = require('express')
const mongoose = require('mongoose');
const db = "mongodb+srv://purposeextra19:purposeextra19@cluster0.h0jzeff.mongodb.net/?retryWrites=true&w=majority"
const cors = require('cors')
const User = require('./models/user-schema')
mongoose.connect(db).then(() => {
    console.log("connect ho gya")
}).catch((err) => {
    console.log(err)
})
const app = express();
app.use(express.json())
app.use(cors())

app.post('/register',async(req,res)=>{
    const {name,email,pass,repeatpass} = req.body
    if(!name || !email || !pass || !repeatpass){
        return res.json({message:"Invalid input"})
    }
    if(pass!=repeatpass){
        return res.json({message:"password does not match"})
    }
    try {
        const user = await User.findOne({email})
        if(user){
            return res.json({message:"user already exists"})
        }
        await User.create({name,email,password:pass});
        return res.json({message:"registered successfully"})

    } catch (err) {
        console.log(err)
        return res.json({message:"some error occured"})
    }
})
app.post('/login',async(req,res)=>{
    const {email,pass}=req.body
    const user = await User.findOne({email})
    if(!user){
       return res.json({"message":"doesnt exist"})
    }
    else{
        // const data=await user.json()
        if(user.password!=pass){
            console.log(user.password)
            return res.json({"message":"password or username incorrect"})
        }
        return res.json({"message":"logined sysss"})
        
    }
})
app.listen(5000, () => {
    console.log("connected to host:5000")
})