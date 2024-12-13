import React from 'react';
import AboutPreviewBlock from "../../Components/Blocks/AboutPreviewBlock/AboutPreviewBlock";
import AboutOriginsBlock from "../../Components/Blocks/BiographyBlocks/AboutOriginsBlock";
import AboutGitBlock from "../../Components/Blocks/BiographyBlocks/AboutGitBlock";
import MainQuoteBlock from "../../Components/Blocks/MainQuoteBlock/MainQuoteBlock";
import SpiritualPracticeBlock from "../../Components/Blocks/BiographyBlocks/SpiritualPracticeBlock";
import AboutSliderBlock from "../../Components/Blocks/AboutSliderBlock/AboutSliderBlock";

const AutobiographyPage = () => {
    return (
        <>
            <AboutPreviewBlock autobiography={true}/>
            <AboutOriginsBlock/>
            <AboutSliderBlock/>
            <AboutGitBlock/>
            <MainQuoteBlock/>
            <SpiritualPracticeBlock/>
        </>
    );
};

export default AutobiographyPage;