import FoodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}` 

    const food = new FoodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

// list food item
const listFood = async (req,res) =>{
    try {
        const food = await FoodModel.find({})
        res.json({success : true, data : food})
    } catch (error) {
        res.json({success : false , data : "Error"})
    }
}

//remove food items
const removeFood = async(req,res) =>{
    try {
        // console.log(req.params.id)
        const food = await FoodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})
        await FoodModel.findByIdAndDelete(req.body.id)
        res.json({success : true , message : "Food Remove"})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : "Error"})
    }

}

export { addFood, listFood, removeFood }