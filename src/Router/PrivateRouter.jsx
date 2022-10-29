import React from 'react'
import Login from '../pages/Login'
import { Navigate, Outlet} from 'react-router-dom'


const PrivateRouter = () => {
  const user = localStorage.getItem("email")
  return (
    user ? <Outlet/> : <Navigate to="/login" />
  )
}

export default PrivateRouter;