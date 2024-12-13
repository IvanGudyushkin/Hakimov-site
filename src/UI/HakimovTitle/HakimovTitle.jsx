import React from 'react';
import cl from './TitleHakimov.module.css'
import arrow from "../../Assets/Icons/big-arrow.svg";
import FilterButton from "../FliterButton/FilterButton";

const HakimovTitle = ({title, all = false, filter}) => {
    return (
        <div className={cl.row1}>
            <div className={cl.title}>
                <h4>{title}</h4>
                {filter ? <FilterButton>{filter}</FilterButton> : <></>}
            </div>
            {all ? <span>все <img src={arrow} alt={'arrow'}/></span> : <></>}
        </div>
    );
};

export default HakimovTitle;