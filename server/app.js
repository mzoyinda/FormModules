const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(() => console.log("connected to database"))
.catch(e => console.log(e))

require("./userDetails.js");

const User = mongoose.model("UserInfo")

app.post("/register", async(req, res)=>{
const {uname, email, password} = req.body;
const encryptedPassword = await bcrypt.hash(password, 10)

try{
    const duplicateUser = await User.findOne({email});
    if(duplicateUser){
        return res.json({error: "user already exists"})
    }
 await User.create({
    uname,
    email,
    password: encryptedPassword
 });
 res.send({status: "ok"})
} catch(error) {
res.send({status: "something went wrong"})
}
})

app.post("/login", async(req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.json({error: "user not found"})
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({}, process.env.JWT_SECRET);

        if(res.status(201)){
            return res.json({status:"ok", data: token});
        }else{
            return res.json({error:"error"});
        }
    }
    res.json({status:"error", error: "invalid password"})
})


app.listen(5001, () => {
    console.log("server has started");
})