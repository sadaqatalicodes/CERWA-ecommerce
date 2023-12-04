import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headphones from './Pages/Headphones';
import GameConsole from './Pages/GameConsole';
import Laptop from './Pages/Laptop';
import Mobiles from './Pages/Mobiles';
import Watches from './Pages/Watches';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/headphones" element={<Headphones />} />
        <Route exact path="/gameconsole" element={<GameConsole />} />
        <Route exact path="/laptop" element={<Laptop />} />
        <Route exact path="/mobiles" element={<Mobiles />} />
        <Route exact path="/watches" element={<Watches />} />
      </Routes>
    </Router>
  );
}

export default App;
