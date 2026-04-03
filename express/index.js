import express from "express"
const app=express()
app.get("/",(req,res)=>{
    res.send("this is default route")

})

app.get("/user",(req,res)=>{
    res.send("this is user route")

})
const port=3000 ||process.env.port
app.listen(port,()=>{
    console.log("server is running")
})