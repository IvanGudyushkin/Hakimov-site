import React, {useState} from 'react';
import MainPreviewBlock from "../../Components/Blocks/MainPrewiewBlock/MainPreviewBlock";
import MainAboutBlock from "../../Components/Blocks/MainAboutBlock/MainAboutBlock";
import RadioBlock from "../../Components/Blocks/RadioBlock/RadioBlock";
import MainEventsBlock from "../../Components/Blocks/MainEventsBlock/MainEventsBlock";
import MainLecturesBlock from "../../Components/Blocks/MainLecturesBlock/MainLecturesBlock";
import MainTopicsBlock from "../../Components/Blocks/MainTopicsBlock/MainTopicsBlock";
import MainQuoteBlock from "../../Components/Blocks/MainQuoteBlock/MainQuoteBlock";
import MainBooksBlock from "../../Components/Blocks/MainBooksBlock/MainBooksBlock";
import MainProjectsBlock from "../../Components/Blocks/MainProjectsBlock/MainProjectsBlock";
import MainNewsBlock from "../../Components/Blocks/MainNewsBlock/MainNewsBlock";

const MainPage = () => {

    const [Shrill] = useState([
        "Бхагавад Гита как она есть",
        "Шри-Ишопанишад",
        "Еще один шанс",
        "Шримад Бхагаватам, десятая песнь, часть вторая",
    ])
    const [Hakimov] = useState([
        "Карма",
        "Эволюция красоты",
        "Возрождение души",
        "Эволюция сознания",
    ])

    return (
        <>
            <MainPreviewBlock/>
            <MainAboutBlock/>
            <RadioBlock/>
            <MainEventsBlock/>
            <MainLecturesBlock/>
            <MainTopicsBlock/>
            <MainQuoteBlock/>
            <MainBooksBlock books={Shrill} title={"Книги Шрилы Прабхупады"}/>
            <MainBooksBlock books={Hakimov} title={"Книги Александра Хакимова"}/>
            <MainProjectsBlock/>
            <MainNewsBlock/>
        </>
    );
};

export default MainPage;