import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const Vendor = () => {
const Navigate = useNavigate();
const [logged , setlogged] = useState(false);
function newpageHandler(){
    setlogged(true);
    Navigate("/vendor2page");
}

  return (
    <div>

     <div className=" w-screen flex  flex-col justify-center items-center py-[100px] gap-y-10 bg-slate-300">
     <div className='space-x-[500px]'>
        <button className="bg-slate-700 py-2 px-5 rounded-sm text-white">
            CHART
        </button>
        <button className="bg-slate-700 py-2 px-5 rounded-sm text-white"
        onClick={()=>{Navigate(-1)}}>
            BACK
        </button>
     </div>
     
<h1 className=' text-3xl font-semibold'> Event Management System</h1>
<br/>
      <div className="flex gap-5">
      <label>
            username:
        </label>
        
        <input 
        requiredTxt
        type="text"
        name="user"
        id="pass"
        placeholder="Vendor"
        className="border border-slate-700 py-1 px-4"
        />
      </div>
        
        <div className="flex gap-5">
        <label>
           password:
        </label>
       
        <input 
       requiredTxt
        type="text"
        name="pass"
        id="pass"
        placeholder="vendor"
            className="border border-slate-700 py-1 px-4"
        />
        </div>
  {/* button  */}
  <div className="space-x-12 py-10">
    <button className="bg-slate-700 py-2 px-5 rounded-sm text-white"> cancel</button>
    <button className="bg-slate-700 py-2 px-5 rounded-sm text-white"
    onClick={newpageHandler}> Login</button>
  </div>

</div>

    </div>
  )
}
