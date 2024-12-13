import React from 'react';
import cl from './HakimovP.module.css'
const HakimovP = ({children, className}) => {
    return (
        <p className={`${cl.p} ${className}`}>
            {children}
        </p>
    );
};

export default HakimovP;