import React from 'react';
import cl from './PaintingBlock.module.css'
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";
import HakimovP from "../../../UI/HakimovP/HakimovP";
import pic1 from '../../../Assets/Gallery/Picture1.webp'
import pic2 from '../../../Assets/Gallery/Picture2.webp'
import pic3 from '../../../Assets/Gallery/Picture3.webp'
import pic4 from '../../../Assets/Gallery/Picture4.webp'
import pic5 from '../../../Assets/Gallery/Picture5.webp'

const PaintingBlock = () => {
    const pictures = [
        pic1, pic2, pic3, pic4, pic5
    ]
    return (
        <div className={cl.block}>
            <div className={cl.row1}>
                <HakimovTitle title={'Живопись'}/>
                <HakimovP className={cl.p}>
                    17 января 2020 года в Алматы открылась первая персональная выставка картин А. Г. Хакимова, которая прошла в государственном музее искусств имени Абылхана Кастеева. На выставке было представлено более 50 оригинальных авторских работ.
                </HakimovP>
            </div>
            <div className={cl.gallery}>
                {pictures.map((picture, index) =>((
                    <img className={cl.image} alt={'Painting by Alexander Khakimov'} key={index} src={picture}/>
                )))}
            </div>
        </div>
    );
};

export default PaintingBlock;