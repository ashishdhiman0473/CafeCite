// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const { name } = require("ejs")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())

// app.listen(8000,()=>{
//     console.log("port connected");
// })

// app.get("/",cors(),(req,res)=>{

// })


// app.post("/",async(req,res)=>{
//     const{name,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })



// app.post("/signup",async(req,res)=>{
//     const{Name,password}=req.body

//     const data={
//         email:email,
//         password:password
//     }

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch(e){
//         res.json("fail")
//     }

// })

