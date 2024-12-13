import React from 'react';
import cl from './MainBannerBlock.module.css'
const MainBannerBlock = () => {
    return (
        <div className={cl.block}>
            <div className={cl.info}>
                <h2>Лекции и книги
                    Александра Хакимова</h2>
                <span>Просветительский портал</span>
            </div>
            <div className={cl.items}>
                <span>> 1 600 лекций</span>
                <span>> 2 600 аудиозаписей</span>
                <span>> 789 книг</span>
            </div>

        </div>
    );
};

export default MainBannerBlock;