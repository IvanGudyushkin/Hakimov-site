import React, {useEffect, useState} from 'react';
import cl from './MainNewsBlock.module.css'
import testAPI from './Example.json'
import testImg from "../../../Assets/Test/Rectangle 10.png";
import NewsItem from "../../../UI/NewsItem/NewsItem";
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";

const MainNewsBlock = () => {
    const [API, setAPI] = useState([]);

    useEffect(() => {
        setAPI(testAPI)
    }, []);

    return (
        <div className={cl.block}>
            <HakimovTitle title={'Новости портала'} all={true}/>
            <div className={cl.row2}>
                {API.map((item, index) =>(
                    <NewsItem key={index} description={item.description} date={item.date} tags={item.tags} image={testImg}/>
                ))}
            </div>
        </div>
    );
};

export default MainNewsBlock;