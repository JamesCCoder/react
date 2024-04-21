import React from 'react';
import "./Button.css";

const Button = (props) =>{
    const {content, onClick} = props;
    return(
        <button onClick={onClick}>
            {content}
        </button>
    )
}

export default Button;