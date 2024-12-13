import React from 'react';
import cl from './Footer.module.css'
import FeedBack from "./Templates/FeedBack";
import MenuFooter from "./Templates/MenuFooter";
import LastFrame from "./Templates/LastFrame";
const Footer = () => {
    return (
        <div className={cl.lastBlock}>
            <FeedBack/>
            <MenuFooter/>
            <LastFrame/>
        </div>
    );
};

export default Footer;