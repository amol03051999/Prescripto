import React, { useContext } from 'react'
import Login from './pages/Login'
  import { ToastContainer, toast } from 'react-toastify';
  import {AppContext} from './context/AppContext'


const App = () => {

  const {aToken} = useContext(Admin)

  return aToken ? (
    <div>
    <ToastContainer/>
    </div>
  ) : (
    <>
        <Login/>
    <ToastContainer/>
    </>
  )
}

export default App