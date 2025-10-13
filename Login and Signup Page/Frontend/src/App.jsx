import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Signup from './components/Signup';

function App() {

  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  )
}

export default App;
