import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from"./pages/Home";
import Contact from "./pages/Contact"
import Profile from './pages/Profile';
import NaviBar from './component/NaviBar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <NaviBar />
      <h1>Router Workshop</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
