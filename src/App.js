import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import Airquality from './views/Airquality';
// import Currentweather from './views/Currentweather';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Air quality" element={<Airquality />} />
        {/* <Route path="/Register" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Register" element={<Register />} /> */}
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
