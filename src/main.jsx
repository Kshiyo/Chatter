import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route , RouterProvider , createBrowserRouter , createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import MessagePage from './components/MessagePage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element = { <Home/>}/>
    <Route path='/login' element = { <Login/> } />
    <Route path='/register' element = { <Register/>} />
    <Route path='/message' element = { <MessagePage/>} />
    </>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)
