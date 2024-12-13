import React from 'react';
import cl from './MainAboutBlock.module.css'
import Hakimov from '../../../Assets/Photo/HakimovAboutMain.webp'
import HakimovButton from "../../../UI/HakimovButton/HakimovButton";
const MainAboutBlock = () => {
    return (
        <div className={cl.block}>
            <div className={cl.text}>
                <h4>ОБ АВТОРЕ</h4>
                <div>
                    <p>Известный в России и других странах специалист по ведической культуре, писатель, психолог, художник,
                        философ, теолог, проповедник. <br/><br/>

                        Духовное имя – Чайтанья Чандра Чаран дас. Является духовным лидером и почётным директором Института
                        прикладных духовных технологий имени Джона Фейворса.
                    </p>
                    <div className={cl.container}>
                        <div>
                            <h5>35 лет +</h5>
                            <span>путешествий</span>
                        </div>
                        <div>
                            <h5>3 000 +</h5>
                            <span>семинаров</span>
                        </div>
                        <div>
                            <h5>98 млн +</h5>
                            <span>просмотров</span>
                        </div>
                    </div>
                    <HakimovButton>ПОДРОБНЕЕ</HakimovButton>
                </div>
            </div>
                <img src={Hakimov} alt={"Hakimov"}/>
        </div>
    );
};

export default MainAboutBlock;