import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div className='containermain'> 
       <nav className="container">
        <ul>
          <li><Link to={"/Homepage"}>Electronics</Link></li>
          <li><Link to={"/Homepage/Medical"}>Medical</Link></li>
          <li><Link to={"/Homepage/Groceries"}>Groceries</Link></li>
          <li><Link to={"/Homepage/Household"}>Household</Link></li>
          <li><Link to={"/Homepage/Cart"}>Cart</Link></li>
        </ul>

        <div className="buttonas">
            <button><Link to={"/Loginup"}>Login</Link></button>
            <button><Link to={"/signup"}>Signup</Link></button>
        </div>

        </nav>
        </div>
  )
}

export default Nav
