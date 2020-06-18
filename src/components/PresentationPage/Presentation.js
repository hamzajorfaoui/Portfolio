import React, { useState } from'react';
import './Presentation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn , faGithub} from '@fortawesome/free-brands-svg-icons'
import AboutMe from '../AboutMe/AboutMe';

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
            <span className="btn" onClick={showAbout}>
             <span className="btnspan">About Me</span>   
             <div className="btndiv"></div>
             <span className="btnicon" >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path></svg>
             </span>
            </span><br></br>
            <span className="findme">Find Me on</span><br></br>
            <a href="https://www.linkedin.com/in/hamza-jorfaoui" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="icone"></FontAwesomeIcon></a>
            <a href="https://github.com/hamzajorfaoui" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="icone"></FontAwesomeIcon></a>
            <div>
           {/* <span> I'm a 20 years old Front End developer. I'm a coding addicted that is focused on JavaScript, specifically in Angular and React and React-Native and also some back-end frameworks like Laravel .and I'm always learning new stuffs, 
            i like to resolve design  problemes and turn any design into a real application ,and  create a performant web applications.
            also I participate in the conception of projects.</span> */}
            </div>
        </div>
    </div>
    <AboutMe show={About} close={showAbout}></AboutMe>
    </div>
)
}
export default Presentation;