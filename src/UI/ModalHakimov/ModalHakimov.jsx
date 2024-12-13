import React from 'react';
import cl from './ModalHakimov.module.css'
import {CSSTransition} from "react-transition-group";
const ModalHakimov = ({children, isVisible, setIsVisible}) => {
    return (
        <CSSTransition
            in={isVisible}
            timeout={500}
            classNames={'fade'}
            unmountOnExit
            mountOnEnter
        >
            <div className={cl.modal} onClick={() => setIsVisible(false)}>
                <div className={cl.modalContainer} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};

export default ModalHakimov;