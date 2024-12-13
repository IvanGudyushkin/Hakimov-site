import React from 'react';
import cl from './HakimovMediumP.module.css'
const HakimovMediumP = ({children}) => {
    return (
        <div className={cl.p}>
            {children}
        </div>
    );
};

export default HakimovMediumP;