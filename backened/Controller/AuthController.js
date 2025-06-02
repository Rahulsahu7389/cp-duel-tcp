const AdminModel = require('../Models/AdminModel');
const dotenv = require('dotenv');
dotenv.config();

const jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signup = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
        const user = await AdminModel.findOne({email})
        const salt = await bcrypt.genSalt(10);
        
        
        if(user){
            return res.status(400).json({message:"user already exists",success:false});
        }
        const hashedPassword = await bcrypt.hash(password, salt);
        const usermodel = new AdminModel({name, email, password: hashedPassword});
        // const usermodel = new AdminModel({name,email,password});
        await usermodel.save();
        return res.status(200).json({message:"User created successfully",success:true})
    } catch (error) {
        return res.status(500).json({message:"internal server error",success:false})
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;// destructuring the data from the request body
        // const user = await AdminModel.findOne({email});// checking if the user already exists
        const user = await AdminModel.findOne({ email })
        if (!user) {
            return res.status(400).json({message: "user does not exist",success:false});//success false means error
        }
        
        
        
        const isMatch = await bcrypt.compare(password, user.password);// comparing the password with the hashed password
        if (!isMatch) {
            
            return res.status(403).json({message: "either email or password is wrong",success:false});//success false means error
        }
        const jwtToken = jwt.sign(
            {email:user.email , _id:user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        );// creating a jwt token
        
        
        //now sending the token to the cliend so that it can be used for authentication
        return res.status(200).json({message: "logged in successfully",success:true,jwtToken,email,name:user.name});//success true means no error
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({message: "Internal server error",success:false});//success false means error
    }
}

module.exports = {
    signup,
    login
}
