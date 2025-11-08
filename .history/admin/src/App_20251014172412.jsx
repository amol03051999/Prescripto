import React, { useContext } from 'react'
import Login from './pages/Login'
  import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const {aToken} = useContext{App}
  return (
    <div>
    <Login/>
    <ToastContainer/>
    </div>
  )
}

export default App