// import './App.css'
import Navbar  from "./components/navbar";
import Home from "./components/home"
// import Login from "./components/login"
// import Signup from "./components/signup"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;