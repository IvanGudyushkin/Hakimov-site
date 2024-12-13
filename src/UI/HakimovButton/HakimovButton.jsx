import React from 'react';
import cl from './HakimovButton.module.css'
const HakimovButton = ({children , className}) => {
    return (
        <button className={`${cl.btn} ${className}`} >
            {children}
        </button>
    );
};

export default HakimovButton;