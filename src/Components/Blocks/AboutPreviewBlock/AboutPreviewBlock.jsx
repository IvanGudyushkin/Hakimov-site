import React from 'react';
import cl from './AboutPreviewblock.module.css'
import arrow from '../../../Assets/Icons/icons-main-go-white.svg'
import bg1 from '../../../Assets/Test/bg-about.png'
import bg2 from '../../../Assets/Test/Biography.webp'
import play from '../../../Assets/Icons/icons-main-play_64.svg'
import {useNavigate} from "react-router-dom";
const AboutPreviewBlock = ({autobiography = false }) => {
    const navigate = useNavigate()
    const stats = [
        { number: '35 лет +', label: 'путешествий' },
        { number: '3 000 +', label: 'семинаров' },
        { number: '98 млн +', label: 'просмотров' }
    ];
    return (
        <div className={cl.block}>
            <div className={cl.content}>
                <img src={autobiography ? bg2 : bg1} alt={'background'} className={cl.background}/>
                <div className={cl.row1}>
                    <span className={cl.bread} onClick={() => navigate('/')}>Главная /</span>
                    {autobiography
                        ? <span className={cl.go} onClick={() => navigate('/about')}>Об авторе <img src={arrow} alt={'arrow'}/> </span>
                        : <span className={cl.go} onClick={() => navigate('/autobiography')}>Автобиография <img src={arrow} alt={'arrow'}/> </span>
                    }
                </div>
                <div className={cl.title}>
                <span className={cl.about}>
                    {autobiography ? 'Автобиография'  : 'Об авторе' }
                    </span>
                    <h1 className={cl.name}>Александр
                        Геннадьевич
                        Хакимов</h1>
                </div>
                <button className={cl.button}>
                    <img src={play} alt={'go'}/>
                </button>
                <div className={cl.info}>
                    {
                        autobiography
                            ?
                            <>
                                <p>
                                    Я вспоминаю начало своей духовной жизни и чувствую большой прилив энтузиазма и желание продолжать проповедь. Эта деятельность всегда приносила мне успех, много радости, учила меня смирению и настоящей любви к Богу.
                                    <br/>
                                    <br/>
                                    Во мне до сих пор горит желание проповедовать так, чтобы все люди отбросили свои эгоистические наклонности и встали на путь служения Единому Богу. Шрила Прабхупада указал нам этот путь, желая блага всему миру.
                                </p>
                            </>
                            :
                            <>
                                <p>
                                    Известный в России и других странах специалист по ведической культуре, писатель,
                                    психолог, художник, философ, теолог, проповедник.
                                    <br/>
                                    <br/>
                                    Духовное имя – Чайтанья Чандра Чаран дас. Является духовным лидером и почётным
                                    директором Института прикладных духовных технологий имени Джона Фейворса.
                                </p>
                                <div className={cl.infoItems}>
                                    {stats.map((stat, index) => (
                                        <div className={cl.item} key={index}>
                                            <span className={cl.stat}>{stat.number}</span>
                                            <span className={cl.label}>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                    }

                </div>
            </div>

        </div>
    );
};

export default AboutPreviewBlock;