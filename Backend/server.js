import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRooter from "./routes/foodRoutes.js";


//app config
const app = express();
const port = 4000

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//API end point
app.use("/api/food", foodRooter)
app.use("/images", express.static("uploads"))



app.get("/", (req, res)=>{
    res.send("Hello")
})
// mongodb+srv://bheru151515:Z65UPb9EpjGoebg4@cluster0.hu4s9.mongodb.net/?
app.listen(port, ()=>{
    console.log("App Run on Port : ", port)
})