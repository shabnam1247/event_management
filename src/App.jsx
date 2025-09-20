import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import Login from './user/pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home></Home>}>      </Route>
      <Route path='/login' element={<Login></Login>}>      </Route>

      
     </Routes>
    </>
  )
}

export default App
