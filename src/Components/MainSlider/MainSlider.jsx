import React, { useState, useCallback, useMemo } from 'react';
import { CSSTransition } from 'react-transition-group';
import cl from './MainSlider.module.css';
import image1 from '../../Assets/Test/slider/SliderCards1.webp';
import image2 from '../../Assets/Test/slider/SliderCards2.webp';
import image3 from '../../Assets/Test/slider/SliderCards3.webp';
import image4 from '../../Assets/Test/slider/SliderCards4.webp';
import image5 from '../../Assets/Test/slider/SliderCards5.webp';
import avatar from '../../Assets/Test/slider/MainLectionAvater.webp';
import left from '../../Assets/Icons/icons-arrows-left-small.svg';
import right from '../../Assets/Icons/icons-arrows-right-small.svg';
import IcoButton from "../../UI/IcoButton/IcoButton";
const MainSlider = () => {
    const initialItems = useMemo(() => [
        {
            img: image4,
            date: '8 декабря, 08:00',
            title: 'Презентация новой книги',
            description: 'Встреча с Александром Хакимовым',
            avatar: avatar
        },
        {
            img: image5,
            date: '8 декабря, 08:00',
            title: 'Презентация новой книги',
            description: 'Встреча с Александром Хакимовым',
            avatar: avatar
        },
        {
            img: image1,
            date: '8 декабря, 08:00',
            title: 'Презентация новой книги',
            description: 'Встреча с Александром Хакимовым',
            avatar: avatar
        },
        {
            img: image2,
            date: '8 декабря, 08:00',
            title: 'Презентация новой книги',
            description: 'Встреча с Александром Хакимовым',
            avatar: avatar
        },
        {
            img: image3,
            date: '8 декабря, 08:00',
            title: 'Презентация новой книги',
            description: 'Встреча с Александром Хакимовым',
            avatar: avatar
        },
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState(initialItems);
    const [animate, setAnimate] = useState(true);
    const [direction, setDirection] = useState("next"); // 'next' or 'prev'

    const updateItemsOrder = useCallback((newIndex, direction) => {
        setAnimate(false);
        setDirection(direction);
        setTimeout(() => {
            setCurrentIndex(newIndex);
            const newItems = [];
            for (let i = 0; i < items.length; i++) {
                newItems.push(initialItems[(newIndex + i) % items.length]);
            }
            setItems(newItems);
            setAnimate(true);
        }, 300);
    }, [items.length, initialItems]);

    const handlePrevClick = useCallback(() => {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        updateItemsOrder(newIndex, "prev");
    }, [currentIndex, items.length, updateItemsOrder]);

    const handleNextClick = useCallback(() => {
        const newIndex = (currentIndex + 1) % items.length;
        updateItemsOrder(newIndex, "next");
    }, [currentIndex, items.length, updateItemsOrder]);


    return (
        <div className={cl.slider}>
            <div className={cl.container}>
                {items.map((item, index) => (
                        <div className={`${cl.item} ${cl[`item${index + 1}`]}`}>
                                <CSSTransition
                                    key={index}
                                    in={animate}
                                    timeout={700}
                                    classNames={{
                                        enter: direction === "next" ? cl['fade-enter-next'] : cl['fade-enter-prev'],
                                        enterActive: direction === "next" ? cl['fade-enter-active-next'] : cl['fade-enter-active-prev'],
                                        exit: direction === "next" ? cl['fade-exit-next'] : cl['fade-exit-prev'],
                                        exitActive: direction === "next" ? cl['fade-exit-active-next'] : cl['fade-exit-active-prev'],
                                    }}
                                >
                                <img src={item.img} alt={'item'}/>
                             </CSSTransition>
                        </div>

                ))}

                    <div className={cl.mainItem}>
                        <CSSTransition
                            in={animate}
                            timeout={700}
                            classNames={{
                                enter: direction === "next" ? cl['fade-enter-next'] : cl['fade-enter-prev'],
                                enterActive: direction === "next" ? cl['fade-enter-active-next'] : cl['fade-enter-active-prev'],
                                exit: direction === "next" ? cl['fade-exit-next'] : cl['fade-exit-prev'],
                                exitActive: direction === "next" ? cl['fade-exit-active-next'] : cl['fade-exit-active-prev'],
                            }}
                        >
                            <div className={cl.itemContainer}>
                                <img className={cl.img} src={items[2].img}
                                     alt={'Институт прикладных духовных технологий'}/>
                                <div className={cl.content}>
                                    <span className={cl.date}>{items[2].date}</span>
                                    <div className={cl.info}>
                                        <img className={cl.avatar} src={items[2].avatar} alt={'avatar'}/>
                                        <div className={cl.text}>
                                            <h4 className={cl.title}>{items[2].title}</h4>
                                            <p>{items[2].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
            </div>
            <div className={cl.counter}>
                <span className={cl.value}>
                    {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <div className={cl.buttons}>
                    <IcoButton ico={left} size={'S'} onClick={handlePrevClick}/>
                    <IcoButton ico={right} size={'S'} onClick={handleNextClick}/>
                </div>
            </div>
        </div>
    );
};

export default MainSlider;
