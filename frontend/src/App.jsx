import './App.css';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Navbar from '../src/components/Navbar';
import Games from '../src/pages/games/Games';
import GameDetails from './pages/games/GameDetails';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import SearchGames from './pages/SearchGames';
import Seeder from './pages/games/Seeder';

function App() {
  return (
    <>
     <div className="App">
       <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="seed" element={<Seeder />} />
        <Route path="games" element={<Games />} />
        <Route path="games/:slug" element={<GameDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="searchgames" element={<SearchGames />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
