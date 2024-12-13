import React from 'react';
import cl from './HamburgerButton.module.css'
import hamburger from '../../Assets/Icons/icons-main-menu.svg'
const HamburgerButton = ({onClick}) => {
    return (
        <button className={cl.button} onClick={onClick}>
            <img src={hamburger} alt={"hamburger"}/>
        </button>
    );
};

export default HamburgerButton;