import React from 'react';
import logo from '../../Assets/Logo/Logo.png'
import cl from './Logo.module.css'
import {useNavigate} from "react-router-dom";
const Logo = () => {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate('/'); // Переход на главную страницу
    };

    return (
        <button onClick={goToHome} className={cl.logo}>
            <img src={logo} alt={"logo"}/>
        </button>
    );
};

export default Logo;