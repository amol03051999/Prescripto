import React from 'react'
import {assets} from '../assets/assets'
import { useState } from 'react';

const Login = () => {

  const [state,setState] = useState('Admin');
  return (
    <form className='min-h-[80vh] flex items-center'>
    <div className='flex flex-col gap-3 m'>
       <p><span>{state}</span>Login</p>
       <div>
        <p>Email</p>
        <input type='email' required/>
       </div>
       <div>
        <p>Password</p>
        <input type='password' required/>
       </div>
       <button>Login</button>
    </div>
    </form>
  )
}

export default Login