import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';


const Sign = () => {
  let navigate = useNavigate();
  let [data, setData]=useState({
    username:"",
    password:"",
    passwordagain:"",
    PhoneNo:""
  })

  let handleChange=(e)=>{
    let{name,value}=e.target;
    setData({...data,[name]:value})
  }

  let handleSubmit=async(e)=>{
    e.preventDefault();
    let respone = await axios.post("http://localhost:4500/customer",data)
    toast.success("user is created sucessfully")
    setTimeout(()=>{
      navigate("/LandingPage")
    },1500)
  }

  return (
    <div className="mainform">
    <div class="form" onSubmit={handleSubmit}> 
        <h1>SignUp</h1>
        <form action="">
            <div class="form-content">
                <label for="username">username:</label>
                <input type="text" id="username" name="username"  placeholder="Enter your username" onChange={handleChange}/>
                
            </div>

            <div class="form-content">
                <label for="password" >password:</label>
                <input  type="password" id="password" name="password"  placeholder="Enter your password" onChange={handleChange}  />
               
            </div>
            <div class="form-content">
                <label for="password" >Enter Password Again:</label>
                <input  type="password" id="password" name="passwordagain"  placeholder="Enter your password"  onChange={handleChange} />
               
            </div>
            <div class="form-content">
                <label for="phoneNo" >Phone Number:</label>
                <input  type="tel" id="" name="PhoneNo"  placeholder="Enter your Phone Nunber" onChange={handleChange}  />
               
            </div>

            <div class="form-content">
                <button >SignUp</button>
            </div>


        </form>
    </div>
    </div>
  )
}

export default Sign
