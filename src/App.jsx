import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import Login from './user/pages/Login'
import Event from './user/pages/Event'
import Register from './user/pages/Register'
import EventDetails from './user/pages/EventDetails'
import UserRegister from './user/pages/UserRegister'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login >}></Route>
        <Route path='/event' element={<Event></Event >}></Route>
        <Route path='/register' element={<Register></Register >}></Route>
         <Route path='/eventdetails' element={<EventDetails></EventDetails>}></Route>
         <Route path='/userregister' element={<UserRegister></UserRegister>}></Route>
        


       
      </Routes>
    </div>
  )
}

export default App
