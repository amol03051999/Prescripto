import React, { useContext } from 'react'
import Login from './pages/Login'
  import { ToastContainer, toast } from 'react-toastify';
  import 


const App = () => {

  const {aToken} = useContext{AppContext}
  return (
    <div>
    <Login/>
    <ToastContainer/>
    </div>
  )
}

export default App