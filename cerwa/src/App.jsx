import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Footer from './Components/Footer'; 
import TopNav from './Components/TopNav';
import Headphones from './Pages/Headphones';
import GameConsole from './Pages/GameConsole';
import Laptop from './Pages/Laptop';
import Mobiles from './Pages/Mobiles';
import Watches from './Pages/Watches';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import WhishList from './Pages/WhishList';
import Account from './Pages/Account';

function App() {
  return (
    <Router>
      <TopNav/>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/headphones" element={<Headphones />} />
        <Route exact path="/gameconsole" element={<GameConsole />} />
        <Route exact path="/laptop" element={<Laptop />} />
        <Route exact path="/mobiles" element={<Mobiles />} />
        <Route exact path="/watches" element={<Watches />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/whishlist" element={<WhishList />} />
        <Route exact path="/account" element={<Account />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
