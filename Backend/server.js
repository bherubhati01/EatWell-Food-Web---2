import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js";
import foodRooter from "./routes/foodRoutes.js";
import UserRouter from "./routes/userRouter.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRouter.js";
import orderRouter from "./routes/orderRoutes.js";


//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//API end point
app.use("/api/food", foodRooter)
app.use("/images", express.static("uploads"))
app.use("/api/user", UserRouter)
app.use("/api/cart",cartRouter)
app.use('/api/order', orderRouter) 



app.get("/", (req, res)=>{
    res.send("Api Working....")
})
// mongodb+srv://bheru151515:Z65UPb9EpjGoebg4@cluster0.hu4s9.mongodb.net/?
app.listen(port, ()=>{
    console.log("App Run on Port : ", port)
})