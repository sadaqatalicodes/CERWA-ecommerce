import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import TopNav from './Components/TopNav.jsx'
import Home from './Pages/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopNav/>
    <Navbar/>
    <Home/>
    {/* <App /> */}
  </React.StrictMode>,
)
