import React, {useEffect, useState} from 'react';
import arrow from "../../../Assets/Icons/big-arrow.svg";
import testImg from '../../../Assets/Test/Institute.png'
import cl from './MainProjectsBlock.module.css'
import data from './Example.json'
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";

const MainProjectsBlock = () => {

    const [institutes, setInstitutes] = useState([]);

    useEffect(() => {
        setInstitutes(data)
    }, []);

    return (
        <div className={cl.block}>
            <div className={cl.content}>
                <HakimovTitle title={'Образовательные проекты'} all={true}/>
                <div className={cl.row2}>
                    <div className={cl.project}>
                        <img className={cl.img} src={testImg} alt={'Институт прикладных духовных технологи'}/>
                        <span className={cl.status}>офлайн</span>
                        <div className={cl.text}>
                            <h4>Институт прикладных духовных технологи</h4>
                            <p>Небольшое описание института</p>
                        </div>
                    </div>
                    <div className={cl.containerProjects}>
                        {institutes.map((institute, index) => (
                            <div className={cl.item} key={index}>
                                <img className={cl.img} src={testImg} alt={'Институт прикладных духовных технологи'}/>
                                <span className={cl.status}>{institute.tag}</span>
                                <div className={cl.text}>
                                    <h4>{institute.title}</h4>
                                    <p>{institute.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProjectsBlock;