import React, { useState } from'react';
import './Presentation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn , faGithub} from '@fortawesome/free-brands-svg-icons'
import AboutMe from '../AboutMe/AboutMe';
import {ButtonAnimated} from "../../custom_components";
function Presentation(){
    const [About , setAboutMe] = useState(false);
    const showAbout =()=>{
      setAboutMe(!About);
    //   console.log("About")
    }
    window.addEventListener('load',()=> document.getElementById('lines').classList.add("active"));

return( 
    <div className="whole">
    <div className="presentation"> 
        <div className="lines" id="lines">
            <span className="hello">Hello,I am</span><br></br>
            <span className="name">Hamza</span>      <br></br>
            <span className="name">Jorfaoui</span>   <br></br>
            <span className="about">A young Front-End Developer passionate about web and mobile development.</span><br></br>
            <ButtonAnimated title="About Me" event={showAbout}></ButtonAnimated><br></br>
            <span className="findme">Find Me on</span><br></br>
            <a href="https://www.linkedin.com/in/hamza-jorfaoui" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="icone"></FontAwesomeIcon></a>
            <a href="https://github.com/hamzajorfaoui" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icone"></FontAwesomeIcon></a>
            <div>
            </div>
        </div>
    </div>
    <AboutMe show={About} close={showAbout}></AboutMe>
    </div>
)
}
export default Presentation;