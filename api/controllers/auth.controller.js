// This function will be asynchronus as this function will be taking input from mongodb
import User from '../models/user.model.js';

// Making use of Bcryptjs
import bcryptjs from 'bcryptjs';

export const signup = async(req,res) =>{
    // console.log(req.body);
    // destructure the username email and password from body
    const {username,email, password} = req.body;

    if(!username || !email || !password || email === '' || password === " " || username === '')
    {
        return res.status(400).json({message : "All fields are required"});
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    // Now we have to create a new user

    const newUser = new User({
        username,
        email,
        password : hashedPassword
    })
    
    // Making use of Try and Catch

    try {
        await newUser.save();
        res.status(200).json({message : "User created successfully"});
    } catch (error) {
        res.status(500).json({message: error.message})
    }


  
};
// Now instead of Console login we have to insert value in Database
