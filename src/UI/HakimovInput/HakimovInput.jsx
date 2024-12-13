import React from 'react';
import cl from './HakimovInput.module.css'
const HakimovInput = ({placeholder}) => {
    return (
        <input className={cl.input} type={"text"} placeholder={placeholder}/>
    );
};

export default HakimovInput;