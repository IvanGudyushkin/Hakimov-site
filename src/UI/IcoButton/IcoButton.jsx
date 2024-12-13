import React from 'react';
import cl from './IcoButton.module.css'
const IcoButton = ({ico, size='S', onClick}) => {

    const sizeClass = size === 'S' ? cl.icoS : cl.icoL;

    return (
        <button onClick={onClick } className={`${cl.button} ${sizeClass}`} >
            <img src={ico} alt={"ico"}/>
        </button>
    );
};

export default IcoButton;