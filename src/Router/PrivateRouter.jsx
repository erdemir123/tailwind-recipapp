import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'


const PrivateRouter = () => {
  const user = localStorage.getItem("email")
  return (
    user ? <Outlet/> : <Navigate to="/" />
  )
}

export default PrivateRouter;