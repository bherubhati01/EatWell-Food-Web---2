import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://bheru01:852654753951@cluster0.hu4s9.mongodb.net/EatWell")
    .then(()=> console.log("DB Conneted"))
}