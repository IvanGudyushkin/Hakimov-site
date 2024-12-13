import React from 'react';
import cl from './FilterButton.module.css'
import arrow from '../../Assets/Icons/icons-arrows.svg'
const FilterButton = ({children}) => {
    return (
        <button className={cl.button}>
            {children}
            <img src={arrow} alt={"arrow"}/>
        </button>
    );
};

export default FilterButton;