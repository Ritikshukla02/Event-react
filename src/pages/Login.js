import React from 'react'
import {Link, useNavigate} from "react-router-dom"

 export const Login = ({setIsLoggedIn}) => {

  const navigate = useNavigate();

  function clickHandler(){
navigate("/admin");
  }
  return (

    <div className="flex justify-around py-10">
    <div className="">
    <Link to="/admin">
        <button className="uppercase font-semibold text-2xl"
        onclick={clickHandler}>
          Admin
        </button>
      </Link>
    </div> 

    <div>
    <Link to="/user">
        <button className="uppercase font-semibold text-2xl">
          user
        </button>
      </Link>
    </div>
    <div>
    <Link to="/vendor">
        <button className="uppercase font-semibold text-2xl">
        vendor
        </button>
      </Link>
    </div>
      
    </div>
  )
}


