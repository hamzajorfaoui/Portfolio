import React from'react';
import './Presentation.css';
export default function Presentation(){
    window.addEventListener('load',()=> document.getElementById('lines').classList.add("active"));
return(
    <div className="presentation"> 
        <div className="lines" id="lines">
            <span className="hello">Hello,I am</span><br></br>
            <span className="name">Hamza</span>      <br></br>
            <span className="name">Jorfaoui</span>   <br></br>
            <span className="about">A young Front-End Developer passionate about web and mobile development .</span>
            <div>
            </div>
        </div>
    </div>
)
}