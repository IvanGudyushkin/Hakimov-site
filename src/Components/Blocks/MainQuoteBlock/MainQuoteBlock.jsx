import React, {useEffect, useState} from 'react';
import cl from './MainQuoteBlock.module.css'
import testAPI from './Example.json'
import hakimov from '../../../Assets/Photo/Quote.png'
const MainQuoteBlock = () => {
    const [info, setInfo] = useState([])

    useEffect(() => {
        setInfo(testAPI)
    }, []);

    return (
        <div className={cl.block}>
            <div className={cl.content}>
                <div className={cl.image}>
                    <img src={hakimov} alt={info.author}/>
                </div>
                <div className={cl.text}>
                    <h2>ЦИТАТА ДНЯ</h2>
                    <blockquote>
                        {info.quote}
                    </blockquote>
                    <span>
                       {info.author} {info.source}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MainQuoteBlock;