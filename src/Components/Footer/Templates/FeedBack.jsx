import React from 'react';
import cl from "../Footer.module.css";
import HakimovInput from "../../../UI/HakimovInput/HakimovInput";
import HakimovButton from "../../../UI/HakimovButton/HakimovButton";
import photo from "../../../Assets/Photo/FeedBack.webp";
import vk from '../../../Assets/Icons/icons-vk.svg'
import telega from '../../../Assets/Icons/icons-telegram.svg'
import youtube from '../../../Assets/Icons/icons-youtube.svg'
import facebook from '../../../Assets/Icons/icons-facebook.svg'
import insta from '../../../Assets/Icons/icons-insta.svg'
import ok from '../../../Assets/Icons/icons-ok.svg'
import tiktok from '../../../Assets/Icons/icons-tiktok.svg'
import spotify from '../../../Assets/Icons/icons-spotify.svg'
import IcoButton from "../../../UI/IcoButton/IcoButton";
const FeedBack = () => {

    const social = [
        {
            img:vk,
            src:''
        },
        {
            img:telega,
            src:''
        },
        {
            img:youtube,
            src:''
        },
        {
            img:facebook,
            src:''
        },
        {
            img:insta,
            src:''
        },
        {
            img:ok,
            src:''
        },
        {
            img:tiktok,
            src:''
        },
        {
            img:spotify,
            src:''
        },
    ]

    return (
        <div className={cl.feedback}>
            <div className={cl.feedbackContent}>
                <h2 className={cl.title}>Хотите применять ведическое знание в реальной жизни?</h2>
                <div className={cl.input}>
                    <div className={cl.inputCol}>
                        <HakimovInput placeholder={'Введите ваш e-mail '}/>
                        <span className={cl.personality}>
                            Отправляя заявку, я соглашаюсь на обработку
                            <a href={'#'}> персональных данных</a>
                        </span>
                    </div>
                    <HakimovButton className={cl.button}>ПОДПИСАТЬСЯ</HakimovButton>
                </div>
                <div className={cl.socialMedia}>
                    <h4 className={cl.socialTitle}>Группы в соцсетях</h4>
                    <div className={cl.socialButtons}>
                        {social.map((item, index) => (
                            <IcoButton size={'L'} ico={item.img} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cl.image}>
                <img src={photo} alt={'Хотите применять ведическое знание в реальной жизни?'}/>
            </div>
        </div>
    );
};

export default FeedBack;