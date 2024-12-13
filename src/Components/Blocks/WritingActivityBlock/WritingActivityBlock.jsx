import React from 'react';
import HakimovBlock from "../../../UI/HakimovBlock/HakimovBlock";
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";
import cl from './WritingActivityBlock.module.css'
import HakimovP from "../../../UI/HakimovP/HakimovP";
import photo from '../../../Assets/Photo/writingActivity-photo.webp'
import arrow from '../../../Assets/Icons/icon-arrow-right-16px.svg'
const WritingActivityBlock = () => {

    const achievements = [
        {
            title: 'Лидеры продаж на Московской книжной выставке-ярмарке',
            items: [
                {
                    year: 2016,
                    description: 'Эволюция сознания',
                },
                {
                    year: 2017,
                    description: 'Иллюзия и Реальность',
                },
                {
                    year: 2018,
                    description: 'Эволюция красоты',
                },
            ],
        },

        {
            title: 'Гран-при премии «За доброту в искусстве» во всероссийском конкурсе «На благо мира»',
            items: [
                {
                    year: 2018,
                    description: 'Эволюция сознания',
                },
                {
                    year: 2019,
                    description: 'Эволюция красоты',
                },
            ],
        },
    ];

    return (
        <HakimovBlock>
            <HakimovTitle title={'Писательская деятельность'}/>
            <div className={cl.content}>
                <div className={cl.col1}>
                    {achievements.map ((achievement, index) => (
                        <div className={cl.item} key={index}>
                            <h4 className={cl.itemTitle}>{achievement.title}</h4>
                            <div className={cl.itemContent}>
                                {achievement.items.map((item, index) => (
                                    <div className={cl.info} key={index}>
                                        <span className={cl.year}>{item.year}</span>
                                        <span className={cl.description}>{item.description} <img src={arrow} alt={'arrow'}/></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cl.col2}>
                    <HakimovP>
                        <img className={cl.photo} src={photo} alt={'Alexandr Hakimov'}/>
                        Александр Геннадьевич Хакимов является автором книг: «Карма. Размышления», «Реинкарнация. Размышления», «Совершенное общественное устройство. Размышления», «Уровни сознания. Размышления», «Духовная семейная жизнь», «Эволюция сознания», «Иллюзия и реальность», «Эволюция красоты».
                        <br/>
                        <br/>
                        Книги Александра Геннадьевича были лидерами продаж на Московской книжной выставке-ярмарке в 2016 году – «Эволюция сознания», в 2017 – «Иллюзия и Реальность», в 2018 году – «Эволюция красоты».
                    </HakimovP>
                    <HakimovP>
                        <br/>
                        <br/>
                        <br/>
                        Его произведениям «Иллюзия и реальность» в 2018 году, как и «Эволюция сознания» и «Эволюция
                        красоты» в 2019 году были вручены Гран-при премии «За доброту в искусстве» во всероссийском
                        конкурсе «На благо мира», которой отмечаются лучшие произведения литературы и искусства
                        гуманистической направленности. Премия за доброту в искусстве была учреждена в 2011 году с целью
                        создания гармоничного, здорового общества, в котором культура и искусство служат развитию,
                        укреплению и распространению идей нравственности, справедливости и доброты.
                        <br/>
                        <br/>
                        В 2019 году Александру Хакимову было присвоено звание Первого Почетного Академика Вайшнавской
                        Академии во Вриндаване.
                    </HakimovP>
                </div>
            </div>
        </HakimovBlock>
    );
};

export default WritingActivityBlock;