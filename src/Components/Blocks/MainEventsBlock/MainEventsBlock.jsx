import React, {useEffect, useState} from 'react';
import cl from './MainEventsBlock.module.css'
import arrow from "../../../Assets/Icons/big-arrow.svg";
import exampleAPI from './Example.json'
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";
const MainEventsBlock = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents(exampleAPI)
    }, []);

    return (
        <div className={cl.block}>
            <HakimovTitle title={'Ближайшие события'} all={true} filter={'октябрь'}/>
            <div className={cl.row2}>
                    {events.map((event, index) => (
                        <div key={index} className={cl.item}>
                            <div className={cl.dateRange}>{event.dateRange}</div>
                            <span className={cl.format}>{event.format}</span>
                            <div className={cl.eventName}>{event.eventName}</div>
                            <div className={cl.location}>{event.location}</div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default MainEventsBlock;