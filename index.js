const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");


dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true,useUnifiedTopology:true },(err)=>{
    if(err)console.log(err);
    else console.log(' database connected');
})

app.listen("5000", () => {
    console.log("Backend is running.");
  });

// app.use('/',(req,res)=>{
//     console.log('this is q url');
//     res.status(200).json('asr')
// })
app.use("/api/auth", authRoute);

