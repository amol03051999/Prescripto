import React, { useState } from 'react'

const Login = () => {

  const [state,seTate] = useState('Sign Up');

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [name,setName] = useState('');

  const onSubmitHandler = async (e) =>{
    e.preventDefault();

  }


  return (
    <form className='min-h-[80vh] flex items-center'>
        <div className=' flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state ==='Sign Up' ? 'Create Account' : 'Login'}</p>
          <p>Please {state ==='Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc' type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your full name' required />
          </div>
          <div className='w-full'>
            <p>Email</p>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' required />
          </div>
          <div>
            <p className='w-full'>Password</p>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password' required />
          </div>
          <button>{state ==='Sign Up' ? 'Create Account' : 'Login'}</button>
        </div>
    </form>
  )
}

export default Login