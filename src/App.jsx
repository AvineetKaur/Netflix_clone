import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Netflix from './pages/Netflix';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/" element={<Netflix/>}/>
      </Routes>
    </BrowserRouter>
  );
  }
