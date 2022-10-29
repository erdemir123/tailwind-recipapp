import React from 'react'
import { Link, useNavigate } from 'react-router-dom'





const Nav = () => {
  const navigate = useNavigate()
 const logout=()=>{
  localStorage.setItem("email","")
  navigate("/login")
 }
  return (
    <div className='bg-slate-400 flex justify-between py-5 px-5 text-lg font-bold '>
        <Link className='text-gray-100 text-2xl cursor-pointer' to="/">Recipe APP</Link>
        <div className='flex justify-between gap-10 text-slate-600 text-xl'>
        <Link to="/about">About</Link>
        <a  href="https://github.com/erdemir123">Github</a>
        <button  onClick={()=>logout()} className=" mb-3"> Log Out</button>
        </div>
        
    </div>
  )
}

export default Nav