import React, { Component } from 'react';
import './App.css';

export default function UserInput({ onSubmitCommand }){

    function onKeyStroke(e){
        if (e.key === "Enter"){
            onSubmitCommand(e.target.value)
        }
    }  

    return(
        <div className="prompt-wrapper">
            <div className="prompt">user@computer:~$</div>
            <input 
                className="user-input"
                type="text"
                onKeyDown={(e) => onKeyStroke(e)}
            >
            </input>
            <div className="cursor"/>
        </div>
    )
}

