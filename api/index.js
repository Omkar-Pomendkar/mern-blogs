import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.routes.js'
const app = express();
dotenv.config();




mongoose.connect(process.env.MONGO)
.then( ()=>{
    console.log("Mongodb is connected")
})
.catch((err)=>{
    console.log(err)
})


app.use(express.json());

app.listen(3000, ()=> {
    console.log("Server is running on port 3000!!")
});



app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
// Create test API Route

// app.get('/', function (req, res) {
//   res.json('Hello World')
// })

// app.listen(3000)


// if we want to go to next middleware we will use it
// app.use((err,req,res,next)=>{

// })