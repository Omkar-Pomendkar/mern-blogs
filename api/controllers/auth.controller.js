// This function will be asynchronus as this function will be taking input from mongodb
import User from '../models/user.model.js';

// Making use of Bcryptjs
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async(req,res,next) =>{
    // console.log(req.body);
    // destructure the username email and password from body
    const {username,email, password} = req.body;

    if(!username || !email || !password || email === '' || password === " " || username === '')
    {
        next(errorHandler(400 , 'All fields are required'));
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
        next(error);
    }


  
};
// Now instead of Console login we have to insert value in Database
