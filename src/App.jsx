import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './user/pages/Home';
import Login from './user/pages/Login';
import Event from './user/pages/Event';
import Register from './user/pages/Register';
import EventDetails from './user/pages/EventDetails';
import UserRegister from './user/pages/UserRegister';
import ContactPage from './user/pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/event' element={<Event />} />
        <Route path='/register' element={<Register />} />
        <Route path='/eventdetails' element={<EventDetails />} />
        <Route path='/userregister' element={<UserRegister />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
