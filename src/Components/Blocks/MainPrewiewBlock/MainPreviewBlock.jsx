import React from 'react';
import cl from './MainPreviewBlock.module.css'
import MainSlider from "../../MainSlider/MainSlider";
const MainPreviewBlock = () => {
    return (
        <div className={cl.block}>
            <div className={cl.content}>
                <div className={cl.titleBlock}>
                    <h2 className={cl.title}>Лекции и книги
                        Александра Хакимова</h2>
                    <span className={cl.description}>Просветительский портал</span>
                </div>
                <ul className={cl.list}>
                    <li>1 600 лекций</li>
                    <li>2 600 аудиозаписей</li>
                    <li>789 книг</li>
                </ul>
            </div>
            <MainSlider/>
        </div>
    );
};

export default MainPreviewBlock;