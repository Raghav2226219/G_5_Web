const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (userid) => {
    return jwt.sign({userid}, process.env.JWT_SECREET_KEY);
}


const registerUser = async(req, res) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password){
        return res.status(400).send({message : "Fill all fields !!"})
    }

     const userExists = await User.findOne({emailId});
    if (userExists){
        return res.status(400).json({message: "Already Exist"});
    }

    const user = new User.create ({
        firstName,
        lastName,
        email,
        password
    })

    await user.save();

    const tokengen = generateToken(user._id);

    return res.status(201).json("User Creates", {tokengen});

}

const loginUser = async(req,res) => {
    const {email,password}  = req.body;
    
    if(!email || !password){
        res.status(400).send("Enter all the details");
    }
    
    
    const userExists = await User.findOne({email});
    
    if(!userExists){
        return res.status(400).send("User not found !! !!");
    }
}

module.exports = {registerUser,loginUser};