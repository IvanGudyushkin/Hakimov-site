import React, {useRef} from 'react';
import cl from './AboutSliderBlock.module.css'
import imageSlider1 from '../../../Assets/biography/img-biography-slider-1.webp'
import imageSlider2 from '../../../Assets/biography/img-biography-slider-2.webp'
import imageSlider3 from '../../../Assets/biography/img-biography-slider-3.webp'
import IcoButton from "../../../UI/IcoButton/IcoButton";
import left from "../../../Assets/Icons/icons-arrows-left-small.svg";
import right from "../../../Assets/Icons/icons-arrows-right-small.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import {Navigation, Pagination} from "swiper/modules";
const AboutSliderBlock = () => {

    const images =
        [
            imageSlider1, imageSlider2, imageSlider3, imageSlider1, imageSlider2, imageSlider3
        ]

    const swiperRef = useRef(null);

    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className={cl.block}>
            <Swiper
                ref={swiperRef}
                slidesPerView={"auto"}
                spaceBetween={32}
                loop={true}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                effect="fade"
                className={'slider'}
                speed={500}
            >
                {images.map((image, index) => (
                    <SwiperSlide className={cl.slide}><img className={cl.img} src={image} alt={'sliderItem'} key={index}/></SwiperSlide>
                ))}
            </Swiper>
            <div className={cl.buttons}>
                <IcoButton ico={left} onClick={goPrev} size={'S'} />
                <IcoButton ico={right} onClick={goNext} size={'S'}/>
            </div>
        </div>
    );
};

export default AboutSliderBlock;