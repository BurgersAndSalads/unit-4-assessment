import React from 'react';
import './CircleSelector.css';

function CircleSelector(props) {

    return(
        <div className="CircleSelector">
            <button id="1" className={props.selected === "1" ? "selected" : ""} onClick={props.handleClick}>SELECT CIRCLE 1</button>
            <button id="2" className={props.selected === "2" ? "selected" : ""} onClick={props.handleClick}>SELECT CIRCLE 2</button>
            <button id="3" className={props.selected === "3" ? "selected" : ""} onClick={props.handleClick}>SELECT CIRCLE 3</button>
            <button id="4" className={props.selected === "4" ? "selected" : ""} onClick={props.handleClick}>SELECT CIRCLE 4</button>
        </div>

    )
}

export default CircleSelector;