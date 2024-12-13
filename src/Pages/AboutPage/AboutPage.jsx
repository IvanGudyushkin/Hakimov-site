import React, {useState} from 'react';
import MainLecturesBlock from "../../Components/Blocks/MainLecturesBlock/MainLecturesBlock";
import MainBooksBlock from "../../Components/Blocks/MainBooksBlock/MainBooksBlock";
import MainQuoteBlock from "../../Components/Blocks/MainQuoteBlock/MainQuoteBlock";
import MainEventsBlock from "../../Components/Blocks/MainEventsBlock/MainEventsBlock";
import AboutPreviewBlock from "../../Components/Blocks/AboutPreviewBlock/AboutPreviewBlock";
import AboutLife from "../../Components/Blocks/AboutLife/AboutLife";
import WritingActivityBlock from "../../Components/Blocks/WritingActivityBlock/WritingActivityBlock";
import PaintingBlock from "../../Components/Blocks/PaintingBlock/PaintingBlock";

const AboutPage = () => {
    const [Hakimov] = useState([
        "Карма",
        "Эволюция красоты",
        "Возрождение души",
        "Эволюция сознания",
    ])

    return (
        <>
            <AboutPreviewBlock/>
            <AboutLife/>
            <MainLecturesBlock blue={true}/>
            <WritingActivityBlock/>
            <MainBooksBlock books={Hakimov} title={"Книги Александра Хакимова"} blue={true}/>
            <PaintingBlock/>
            <MainQuoteBlock/>
            <MainEventsBlock/>
        </>
    );
};

export default AboutPage;