import React from 'react';
import icon from '../../Assets/Icons/icons-littlearrows.svg'
import cl from './SearchFilter.module.css'
const SearchFilter = () => {
    return (
        <button className={cl.button}>
            везде<img src={icon} alt={"arrow"}/>
        </button>
    );
};

export default SearchFilter;