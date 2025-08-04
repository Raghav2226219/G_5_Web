const user = require("../models/userModel");




const registerUser = async(req, res) => {
    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password){
        res.status(400).send({message : "Fill all fields !!"})
    }

    const user = new User ({
        "firstName": "abc",
        "lastName": "xyz",
        "email": "abc@gmail.com",
        "password" : "9j89j"
    })

    await user.save();

}

module.exports = registerUser;



// const loginUser = () => {}