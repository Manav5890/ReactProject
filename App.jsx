import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {global} from './routing/GlobalRouting'
import Login from './pages/Login'
import Nav from './Nav'
import { Toaster } from 'react-hot-toast'
import GlobalContext from './globalcontext/GlobalContext'



const App = () => {
  return (<GlobalContext>
  <Toaster/>
           <RouterProvider router={global}>
           
           </RouterProvider>
           </GlobalContext>
  
  )
}

export default App
