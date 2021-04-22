import * as React from 'react';
import "../button/button.css"

const button = (props) => {
    return(
    <button className={props.buttonStyle}>{props.buttonText}</button>
    )
};

export default button;