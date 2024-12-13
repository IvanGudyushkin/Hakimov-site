import React from 'react';
import cl from './NewsItem.module.css'
const NewsItem = ({image, date, tags, description}) => {
    return (
        <div className={cl.item}>
            <div className={cl.img}>
                <img src={image} alt={"news"}/>
            </div>
            <div className={cl.info}>
                <span className={cl.date}>{date}</span>
                <div className={cl.tags}>
                    {tags.map((tag, index) => (
                        <span key={index}>{tag}</span>
                    ))}
                </div>
                <h4 className={cl.description}>{description}</h4>
            </div>
        </div>
    );
};

export default NewsItem;