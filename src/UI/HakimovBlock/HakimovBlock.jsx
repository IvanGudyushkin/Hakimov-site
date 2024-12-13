import React from 'react';
import cl from './HakimovBlock.module.css'
const HakimovBlock = ({children}) => {
    return (
        <div className={cl.block}>
            {children}
        </div>
    );
};

export default HakimovBlock;