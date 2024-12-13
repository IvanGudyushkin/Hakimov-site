import React, {useEffect, useState} from 'react';
import cl from "./MainLecturesBlock.module.css";
import testImg from '../../../Assets/Test/Rectangle 9.png'
import testAPI from './Example.json'
import LectureItem from "../../../UI/LectureItem/LectureItem";
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";

const MainLecturesBlock = ({blue = false}) => {
    const [API, setAPI] = useState([]);

    useEffect(() => {
        setAPI(testAPI)
    }, []);


    return (
        <div className={blue ? cl.background : ''}>
            <div className={blue ? cl.content : cl.block}>
                <div className={cl.row1}>
                    <HakimovTitle title={'Лекции'} all={true} filter={'Александр Хакимов'}/>
                </div>
                <div className={cl.row2}>
                    <div className={cl.mainNew}>
                        <img className={cl.img} src={testImg} alt="Hakimov"/>
                        <span className={cl.date}>8 октября 2023, Минск</span>
                        <div className={cl.container}>
                            <span className={cl.eventCategory}>Видео</span>
                            <span className={cl.eventCategory}>Семинары</span>
                        </div>
                        <h4>ШБ 8.11.26, Жизненная необходимость духовной практики - Чайтанья Чандра Чаран Прабху </h4>
                    </div>
                    <div className={cl.containerLecture}>
                        {API.map((item, index) =>(
                            <LectureItem key={index} title={item.title} date={item.date} categories={item.tags} image={testImg}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLecturesBlock;