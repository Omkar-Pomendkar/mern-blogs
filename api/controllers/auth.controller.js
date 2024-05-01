// This function will be asynchronus as this function will be taking input from mongodb

export const signup = async(req,res) =>{
    // console.log(req.body);
    // destructure the username email and password from body
    const {username,email, password} = req.body;
    
   
};
// Now instead of Console login we have to insert value in Database
