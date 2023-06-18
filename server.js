import  express  from "express";
import configViewEngine from "./src/configs/viewEngine.js";
import dotenv from "dotenv";

const app = express()
const port = process.env.PORT || 8080

dotenv.config()
configViewEngine(app)

app.get("/", (req,res)=>{
    const data = {
        name: "huy",
        age: 24,
        address: "hà nội"
    }
    res.render("index",data)
})

app.listen(port, ()=>{
    console.log("server start", port)
})