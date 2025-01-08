import exprees from "express"
import { addFood, listFood, removeFood } from "../controllers/foodControllers.js"
import multer from "multer"

const foodRooter = exprees.Router();

const storeage = multer.diskStorage({
    destination : "uploads",
    filename : (req,file, cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storeage})

foodRooter.post("/add",upload.single("image"), addFood)
foodRooter.get("/list", listFood)
foodRooter.post("/remove", removeFood)



export default foodRooter;