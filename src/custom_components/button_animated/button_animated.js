import React from 'react';
import './button_animated.css';
export default function ButtonAnimated({title , event}){
    return(
        <span className="btn" onClick={event}>
        <span className="btnspan">{title}</span>   
        <div className="btndiv"></div>
        <span className="btnicon" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 476.213 476.213"><path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path></svg>
        </span>
       </span>
    )
}
