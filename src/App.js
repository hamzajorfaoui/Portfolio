import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Presentation  from './components/PresentationPage/Presentation.js';
function App() {
  return (
    <div className="App"> 
    <Navbar></Navbar>
    <Presentation></Presentation>
    </div>
    
  );
}

export default App;
