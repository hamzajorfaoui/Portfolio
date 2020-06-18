import React, {useState } from 'react';
import './Navbar.css';
function Navbar() {
  const [overlay,setOverlay] = useState(false);
  const click =()=>{
    setOverlay(!overlay);
  } 
  return (
    <div> 
      <div className="App-header">

        <a href="/ok" className="logo">
         Portfolio
        </a>
        <div className="items">
        <a href="/ok" className="header-item active">
         About
        </a>         
         <a href="/ok"  className="header-item ex-tb">
         Projects
        </a>         
        <a href="/ok"  className="header-item ex-tb">
         Projects
        </a> 
        <a href="/ok"  className="header-item ex-tb">
         Projects
        </a>
        </div> 
        <div className={overlay?'nav-icon active':'nav-icon'} onClick={click}>
        <div></div>
        </div>
        </div>
        <div id="overlay" className={overlay?"active":""}>
        <div className="items-overlay">
            <ul className="listeitems">
              <li>
              <a href="/ok" className="item">
              Projects
              </a>
              </li>
              <li>
              <a href="/ok" className="item">
              Projects
              </a>
              </li>
              <li>
              <a href="/ok" className="item">
              Projects
              </a>
              </li>
            </ul>       
        </div> 
        </div>
    </div>
    
  );
}

export default Navbar;
