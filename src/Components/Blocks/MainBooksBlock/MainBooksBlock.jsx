import React from 'react';
import cl from './MainBooksBlock.module.css'
import test from '../../../Assets/Test/Img.png'
import bookIco from '../../../Assets/Icons/BookButton.svg'
import cart from '../../../Assets/Icons/InCartButton.svg'
import play from '../../../Assets/Icons/PlayButton.svg'
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";

const MainBooksBlock = ({title, books, blue=false}) => {
    return (
        <div className={blue ? cl.background : ''}>
            <div className={blue ? cl.content : cl.block}>
                <HakimovTitle title={title} all={true}/>
                <div className={cl.row2}>
                    {books.map((book, index) => (
                        <div key={index} className={cl.item}>
                            <div className={cl.img}>
                                <img src={test} alt={book}/>
                            </div>
                            <h5>{book}</h5>
                            <div className={cl.btnContainer}>
                                <button className={cl.button}>
                                    <img src={play} alt={'play'}/>
                                </button>
                                <button className={cl.button}>
                                    <img src={bookIco} alt={'book'}/>
                                </button >
                                <button className={cl.button}>
                                    <img src={cart} alt={'cart'}/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainBooksBlock;