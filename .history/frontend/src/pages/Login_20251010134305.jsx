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
        <div>
          <p>{state ==='Sign Up' ? 'Create Account' : 'Login'}</p>
          <p>Please {state ==='Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
          <div>
            <p>Full Name</p>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your full name' required />
          </div>
          <div>
            <p>Email</p>
            <input type='email' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your full name' requi />
          </div>
          <div>
            <p>Password</p>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your full name' />
          </div>
        </div>
    </form>
  )
}

export default Login