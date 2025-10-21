import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import Login from './user/pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from './user/pages/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login >}></Route>
                <Route path='/contact' element={<ContactPage></ContactPage >}></Route>
       
      </Routes>
    </div>
  )
}

export default App
