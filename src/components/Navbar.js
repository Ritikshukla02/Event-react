import React from 'react'

import {Link} from "react-router-dom"



const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='flex justify-around'>

        <Link to="/"> 
            <img src="https://www.v3events.in/images/logo.png" alt="Logo" width={80} height={10} loading="lazy"/>
        </Link>

        <nav>
            <ul className='flex gap-3 py-4'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login - SignUp - LogOut - Dashboard */}
        <div className='flex ml-5 mr-3 gap-3 py-4'>
            { !isLoggedIn &&
                <Link to="/login">
                    <button>
                        Login
                    </button>
                </Link>
            }
            
        </div>
      
    </div>
  )
}

export default Navbar
