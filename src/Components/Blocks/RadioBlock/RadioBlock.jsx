import React, {useEffect, useState} from 'react';
import example from '../../../Assets/Test/RadioButton.png'
import play from '../../../Assets/Icons/icons-main-play_64.svg'
import cl from './RadioBlock.module.css'
import data from './Example.json'
import Player from "../../Player/Player";
import cat from '../../../Assets/Test/urring-cat-1.mp3'
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";
const RadioBlock = () => {
    const [radioData, setRadioData] = useState([]);
    const [song, setSong] = useState()
    const [audio] = useState('http://www.ahakimov.com:8000/radio');

    useEffect(() => {
        setRadioData(data)
    }, []);


    return (
        <div className={cl.block}>
            {
                song ? <Player src={audio} img={example} type={'Радио'} name={'2018.10.14, Вриндаван, Шримад-Бхагаватам 6.12.7, Победа и поражение'} artist={'Александр Хакимов'} close={setSong} radio={true}/> : <></>
            }
            <HakimovTitle title={'Интересно сегодня'} all={true}/>
            <div className={cl.row2}>
                <div className={cl.mainRadio}>
                    <button className={cl.radioButton} onClick={() => setSong(cat)}>
                        <img className={cl.radioImage} src={example} alt={'ico'}/>
                        <img className={cl.radioPlay} src={play} alt={'play'}/>
                    </button>
                    <div className={cl.text}>
                        <h5>РАДИО</h5>
                        <span className={cl.mini}>В эфире:</span>
                        <span>2018.10.14, Вриндаван, Шримад-Бхагаватам 6.12.7, Победа и поражение</span>
                    </div>
                </div>
                <div className={cl.container} >
                    {radioData.map((item, index) => (
                        <div className={cl.item} key={index}>
                            <button className={`${cl.radioButton} ${cl.mini}`}>
                                <img className={`${cl.radioImage} ${cl.mini}`} src={example} alt="ico" />
                                <img className={`${cl.radioPlay} ${cl.mini}`} src={play} alt="play" />
                            </button>
                            <div className={cl.itemText}>
                                <span className={cl.itemrow1}>{item.author.id}</span>
                                <span className={cl.itemrow2}>{item.message}</span>
                                <span className={cl.itemrow3}>{item.author.name}</span>
                            </div>
                            <span className={cl.time}>{item.duration}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RadioBlock;