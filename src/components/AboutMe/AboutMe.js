import React from 'react';
import'./AboutMe.css';
import frontImage from '../../assests/front.gif';
export default function AboutMe({show,close}){
    return(
        <div className={!show ?"Overlay" :"Overlay active"}>
        <div className="row">
         <div className="about left">
         <div className="closebutton">
         <div></div>
         </div>
          <div className="Aboutback">
           <span>About</span>
          </div>
          <div className="about-text">
            <h3>About Me.<br></br>
                <span>Hamza Jorfaoui</span>
            </h3>
           <span> 
            I'm a 20 years old <span>Front-End developer</span>. I'm a coding addicted that is focused on <span>JavaScript</span>, specifically in <span>Angular</span> and <span>React</span> and <span>React-Native</span> and also some back-end frameworks like <span>Laravel</span> .and I'm always learning new stuffs, 
            i like to resolve design  problems and turn any design into a real application ,and creating a <span>performance web applications</span>.<br></br>
            Also I participate in the conception of projects.
            </span>
          </div>
         </div>
         <div className="about right">
         <div className="closebutton" onClick={close}>
         <div></div>
         </div>
         <img src={frontImage}></img>
         </div>            
        </div>

        </div>
    )
}