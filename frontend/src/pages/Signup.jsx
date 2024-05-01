 import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
 import { Link } from 'react-router-dom'

 const Signup = () => {
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
          <form  className=' flex flex-col gap-4' >
            <div>
              <Label value='Your username'/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>

            <div>
              <Label value='Your email'/>
              <TextInput type='email' placeholder='Email' id='email'/>
            </div>

            <div>
              <Label value='Your password'/>
              <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Signup
              </Button>
          </form>
          <div className='flex gap-2 text-sm mt-3'>
            <span> Have an account?</span>
            <Link to='/signin' className='text-blue-500'> Signin</Link>
          </div>
        </div>
       </div>
     </div>
   )
 }
 
 export default Signup
 
