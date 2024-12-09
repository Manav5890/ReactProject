import {createBrowserRouter} from "react-router-dom"
import Homepage from "../pages/Homepage";
import Electronics from "../components/Electronics";
import Cart from "../components/Cart";
import Medical from "../components/Medical";
import Layout from "../components/Layout";
import LandingPage from "../pages/LandingPage";
import Household from "../components/Household";
import Groceries from "../components/Groceries";
import Sign from "../pages/Sign";
import Login from "../pages/Login";
import Nav from "../Nav";
import PageNotFound from "../components/PageNotFound";
import UpdateCard from "../components/UpdateCard";
import axios from "axios";


export let global =createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/Homepage",
            element:<Homepage/>,
            children:[
                {
                    path:"/Homepage",
                    element:<Electronics/>
                },
                {
                    path:"/Homepage/Medical",
                    element:<Medical/>,
                    loader:async()=>{
                        let {data}=await  axios.get("http://localhost:4500/Medical/");
                        return data;
                   }
                },
                {
                    path:"/Homepage/Household",
                    element:<Household/>,
                 
                },
                {
                    path:"/Homepage/Groceries",
                    element:<Groceries/>
                },{
                    path:"/Homepage/Cart",
                    element:<Cart/>
                }
            ]
        },
        {
            path:"/signup",
            element:<Sign/>
        },
        {
            path:"/updateCard/:id",
            element:<UpdateCard/>
        },  
        {
            path:"/Loginup",
            element:<Login/>
        },{
            path:"/Nav",
            element:<Nav/>
        }
      ]
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
])