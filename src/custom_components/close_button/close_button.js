import React from 'react';
import './close_button.css';

export default function CloseButton({event}){
    return(
        <div className="closebutton" onClick={event}>
        <div></div>
        </div>
    )
}