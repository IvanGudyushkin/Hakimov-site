import React from 'react';
import cl from '../Footer.module.css'
import arrow from '../../../Assets/Icons/icon-arrow-right-16px.svg'
import pic1 from '../../../Assets/Test/LastPicture1.webp'
import pic2 from '../../../Assets/Test/LastPicture2.webp'
import pic3 from '../../../Assets/Test/LastPicture3.webp'
import pic4 from '../../../Assets/Test/LastPicture4.webp'
const LastFrame = () => {

    const pictures = [pic1, pic2, pic3, pic4]

    return (
        <div className={cl.lastFrame}>
            <div className={cl.lastFrameCol1}>
                <h2 className={cl.quote}> Осознавший красоту, побеждает смерть</h2>
                <span className={cl.sourse}>
                    Александр Хакимов / Книга “Эволюция красоты”
                    <img src={arrow} alt={'arrow'}/>
                </span>
                <span className={cl.lastlast}>© Александр Хакимов, 2024 Все права защищены</span>
            </div>
            <div className={cl.lastFrameCol2}>
                {
                    pictures.map((pic, index) => (
                        <img src={pic} key={index} alt={'book'}/>
                    ))
                }
            </div>
        </div>
    );
};

export default LastFrame;