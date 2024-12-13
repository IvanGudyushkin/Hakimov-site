import React from 'react';
import cl from "./LectureItem.module.css";

const LectureItem = ({image, categories, date, title}) => {
    return (
        <div className={cl.item}>
            <img className={cl.img} src={image} alt="Hakimov"/>
            <span className={cl.date}>{date}</span>
            <div className={cl.container}>
                {categories.map((category, index) => (
                    <span key={index} className={cl.eventCategory}>{category}</span>
                ))}
            </div>
            <h4>{title}</h4>
        </div>
    );
};

export default LectureItem;