import React, {useEffect, useState} from 'react';
import cl from './MainTopicsBlock.module.css'
import arrow from "../../../Assets/Icons/big-arrow.svg";
import exampleAPI from './Example.json'
import exampleImg from '../../../Assets/Test/TopicImg.png'
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";
const MainTopicsBlock = () => {
    const [topics, setTopics] = useState([]);


    useEffect(() => {
        setTopics(exampleAPI)
    }, []);

    return (
        <div className={cl.block}>
            <HakimovTitle title={'Актуальные темы'} all={true} />
            <div className={cl.row2}>
               <p>
                   Не знаете с чего начать изучение вед? Как применить полученные знания на практике? Тогда этот раздел для вас! В нём мы собрали самую важную информацию и структурировали её по темам.
               </p>
            </div>
            <div className={cl.row3}>
                {topics.map((topic, index) => (
                    <div className={cl.item} key={index}>
                        <div className={cl.image}>
                            <img src={exampleImg} alt={topic.category}/>
                        </div>
                        <div className={cl.text}>
                            <h5>{topic.category}</h5>
                            <span>
                                {topic.contents.join(' • ')}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainTopicsBlock;