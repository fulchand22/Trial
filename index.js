import App from "./App.js";

const port = 7000

App.get("/",(req,res)=>{
    return res.json({
        message:"Welcome to API",
        success:true,
        status:200,
    })
})

App.get("/brands",(req,res)=>{
    return res.json({
        message:"Brands fetched successfully!!!",
        success:true,
        status:200,
        data:["Apple","OPPO","Samsung","Realme","Redmi","IQOO"]
    })
})

App.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})