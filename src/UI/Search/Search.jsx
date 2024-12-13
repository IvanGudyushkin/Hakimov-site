import React from 'react';
import SearchFilter from "../SearchFilter/SearchFilter";
import IcoButton from "../IcoButton/IcoButton";
import search from "../../Assets/Icons/icons-main-search_2px.svg"
import cl from './Search.module.css'

const Search = () => {
    return (
        <div className={cl.search}>
            <SearchFilter/>
            <input placeholder={"Я ищу ..."}/>
            <IcoButton ico={search}/>
        </div>
    );
};

export default Search;