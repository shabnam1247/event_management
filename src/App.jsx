import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './user/pages/Home'
import Login from './user/pages/Login'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login >}></Route>
<Route path='/home' element={<home></home >}></Route>

      </Routes>
    </div>
  )
}

export default App
