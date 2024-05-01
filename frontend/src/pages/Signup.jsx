 import { Alert, Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
 import { Link } from 'react-router-dom'
import { useState } from 'react'
 const Signup = () => {

  const [formData,setFormData] = useState({})
  const [errormessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
   
  const handleChange = (e) =>{
    // console.log(e.target.value)
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  };
  // console.log(formData)

  // As we Submitting to database it will take time
  const handleSubmit = async (e) =>{
    // As when clicking on the submit button as the form is going to refresh we are making use of e.preventdefault
      e.preventDefault();

      if(!formData.username || !formData.email || !formData.password){
        return setErrorMessage('Please fill out your Details')
      }

      try {
        const res = await fetch ('/api/auth/signup',{
          method : 'POST',
          headers :{ 'Content-Type' : 'application/json'},
          body : JSON.stringify(formData),
        });
        // const data = await res.json();
      } catch (error) {
        
      }
  }
  
  return (
     <div className='min-h-screen mt-20'>
       <div className='flex p-3 max-w-3xl mx-auto  flex-col md:flex-row md:items-center gap-5'>
        {/* Left */}
        <div className='flex-1'>
        <Link to="/" className=' font-bold dark:text-white text-4xl'> 
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Guppy's</span>
        Blog
        </Link>
        <p className='text-sm mt-5'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dolor repellat reprehenderit, itaque aperiam eius numquam delectus placeat dicta quia corporis cum! Aperiam cum blanditiis quia animi amet non hic.</p>
        </div>

        {/* Right */}
        <div className='flex-1'>
          <form  className=' flex flex-col gap-4' onSubmit={handleSubmit} >
            <div>
              <Label value='Your username'/>
              <TextInput type='text' placeholder='Username' id='username'  onChange={handleChange}/>
            </div>

            <div>
              <Label value='Your email'/>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
            </div>

            <div>
              <Label value='Your password'/>
              <TextInput type='text' placeholder='Password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Signup
              </Button>
          </form>
          <div className='flex gap-2 text-sm mt-3'>
            <span> Have an account?</span>
            <Link to='/signin' className='text-blue-500'> Signin</Link>
          </div>
          {
          errormessage && (
            <Alert className='mt-5' color='failure'>
              {errormessage}
            </Alert>
          )
        }

        </div>
       
       </div>
     </div>
   )
 }
 
 export default Signup
 
