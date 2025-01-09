import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// LogIn User
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({ success: false, message: "User Doesn't exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({success : false, message : "email/password Wrong"})
        }
        const token  = createToken(user._id);
        res.json({success : true , token})
    } catch (error) {
        console.log(error)
        res.json({success : false, message : "Error"})
        
    }

}

//register User
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        //Checking user already exists
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already Exists" })
        }
        // validating email & Strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid Email" })
        }
        if (password.length <= 8) {
            return res.json({ success: false, message: "Please enter Strong Password" })
        }

        //hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //create new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.send({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

export { loginUser, registerUser }