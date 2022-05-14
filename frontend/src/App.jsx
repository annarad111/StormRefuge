import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Navbar from '../src/components/Navbar'
import Games from './pages/games/Games';

function App() {
  return (
    <>
     <div className="App">
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="games" element={<Games />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
