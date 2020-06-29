import React, { useEffect, useState } from 'react';
import'./AboutMe.css';
import frontImage from '../../assests/front.gif';
import {CloseButton} from "../../custom_components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function AboutMe({show,close}){
    const [selected , setSelected] = useState(0);
    let transforms=[0,67,134];
    let titles =["About Me" , "Skills" , "Education"];
    const fadein =()=>{
        if(selected<2){
        setSelected(selected+1);       
        }
    }
    const fadeout =()=>{
        if(selected>0){
        setSelected(selected-1);         
        }
    }
    useEffect(()=>{
      document.getElementById("traget").style.transform="translateX(-"+transforms[selected]+"%)";
    },[selected]);
    return(
        <div className={!show ?"Overlay" :"Overlay active"}>
        <div className="row">
         <div className="about left">
         <div className="cls">
         <CloseButton event={close}></CloseButton>
         </div>
          <div className="Aboutback">
           <span>About</span>
          </div>
      <div className="About_bottons">
        <button onClick={fadeout} className="leftbtn" disabled={selected===0}>
                <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon> <span> {selected>0 ?titles[selected-1] :""}</span>
        </button>
        <button onClick={fadein} className="rightbtn" disabled={selected===2}>
                <span> {selected<2 ?titles[selected+1] :""}</span> <FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon>
        </button>
      </div>
          <div className="aboutsection" id="traget">
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
          <div className="about-text">
            <h3>What I Do?<br></br>
                <span>Hamza Jorfaoui1</span>
            </h3>
          </div>
          <div className="about-text">
            <h3>About Me.<br></br>
                <span>Hamza Jorfaoui2</span>
            </h3>
          </div>
          
          </div>
         </div>
         <div className="about right">
         <div className="cls">
         <CloseButton event={close}></CloseButton>
         </div>
         <img src={frontImage} alt="Gif"></img>
         </div>            
        </div>

        </div>
    )
}