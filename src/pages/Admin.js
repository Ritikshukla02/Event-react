import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export const Admin = () => {
    const Navigate = useNavigate();
  return (
    <div>
<div className="flex  flex-col justify-center items-center py-[100px] gap-y-10 bg-slate-300">
<h1 className=' text-3xl font-semibold'> Event Management System</h1>
<br/>
      <div className="flex gap-5">
      <label>
            username:
        </label>
        
        <input 
        type="text"
        placeholder="Enter name"
        className="border border-slate-700 py-1 px-4"
        />
      </div>
        
        <div className="flex gap-5">
        <label>
           password:
        </label>
       
        <input 
        type="text"
        placeholder="Enter your password"
            className="border border-slate-700 py-1 px-4"
        />
        </div>
  {/* button  */}
  <div className="space-x-12 py-10">
    <button className="bg-slate-700 py-2 px-5 rounded-sm text-white"
    onClick={()=>{Navigate(-1)}}> cancel</button>
    <button className="bg-slate-700 py-2 px-5 rounded-sm text-white"> Login</button>
  </div>

</div>
    
    </div>
  )
}

