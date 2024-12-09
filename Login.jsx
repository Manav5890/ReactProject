import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
        let navigate = useNavigate();
           let[data, setData] =useState({
            username:"",
            password:""
           });

           let handleLogin=(e)=>{
            let{name,value}=e.target;
            setData({...data,[name]:value})
             }

             let handleForm=async(e)=>{
              e.preventDefault();
            //  let getRespone= await axios.get("http://localhost:4500/customer");
            //  toast.success("Login sucessfully")
            //  setTimeout(()=>{
            //   navigation("/LandingPage")
            //  },1500)

            let response=await axios.get("http://localhost:4500/customer");
            console.log(response);
             let costomer = response.data;
            let userData= costomer.find(element => element.username== data.username &&element.password == data.password);
             console.log(userData)
             if (userData) {
               console.log("succesful")
                    toast.success("Login Succesfully");
            setTimeout(()=>{
               navigate("/homePage")
            },1500)
             }else{
               console.log("error")
               toast.error("something went wrong")
             }
             }
 
  return (
    <div className="mainform">
    <div class="form" onSubmit={handleForm}> 
        <h1>Login</h1>
        <form action="">
            <div class="form-content">
                <label for="username">username:</label>
                <input type="text" id="username" name="username"  placeholder="Enter your username" onChange={handleLogin}/>
                
            </div>

            <div class="form-content">
                <label for="password" >password:</label>
                <input  type="password" id="password" name="password"  placeholder="Enter your password" onChange={handleLogin}  />
               
            </div>

            <div class="form-content">
                <button >Login</button>
            </div>


        </form>
    </div>
    </div>
  )
}

export default Login
