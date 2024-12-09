import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className='landing'>
     <div className="page">
      <h1>Welcome to ShopEase</h1>
      <h3>For shopping</h3>
     <Link to={"/Homepage"}> <button >Shop Now</button>  </Link>  
     </div>
    </section>
  )
}

export default LandingPage
