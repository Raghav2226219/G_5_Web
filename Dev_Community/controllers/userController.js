const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateToken = (userid) => {
    return jwt.sign({userid}, process.env.JWT_SECREET_KEY);
}


const registerUser = async(req, res) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password){
        return res.status(400).send({message : "Fill all fields !!"})
    }

     const userExists = await User.findOne({emailId});

     const hashedPass = await bcrypt.hash(password,10);

    if (userExists){
        return res.status(400).json({message: "Already Exist"});
    }

    const user = new User.create ({
        firstName,
        lastName,
        email,
        password:hashedPass
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

    // if(password != userExists.password){
    //     return res.status(401).send("Invalid password");
    // }

    const isMatched = await bcrypt.compare(password,userExists.password);

    if(!isMatched){
        return res.status(401).send("Invalid password");
    }

    return res.status(200).json({
        message : "Loged In  !!",
        userName: userExists.firstName,
        email : userExists.email,
    });

}

module.exports = {registerUser,loginUser};