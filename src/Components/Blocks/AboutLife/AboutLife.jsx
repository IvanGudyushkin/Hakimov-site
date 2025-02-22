import React from 'react';
import HakimovBlock from "../../../UI/HakimovBlock/HakimovBlock";
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";
import cl from './AboutLife.module.css'
import photo from '../../../Assets/Photo/photo-about.webp'
import HakimovP from "../../../UI/HakimovP/HakimovP";
const AboutLife = () => {
    return (
       <HakimovBlock>
           <HakimovTitle title={'Дело жизни'}/>
           <div className={cl.content}>
               <img className={cl.photo} src={photo} alt={'Alexandr Hakimov'}/>
               <div className={cl.col2}>
                    <HakimovP>Александр Хакимов более тридцати лет путешествует по России и странам ближнего и дальнего зарубежья, занимаясь популяризацией ведического знания, которое, по сути, является источником мировой культуры. На карте нашей страны трудно найти точку, которую бы он не посетил.
                        <br/>
                        <br/>
                        Александр Геннадьевич Хакимов за это время провел более трех тысяч успешных семинаров в двадцати странах мира. Поэтому тысячи людей так ждут встречи с ним — получить заряд энергии и силы для внутреннего прогресса, позитивных перемен в жизни. Практически каждый день его жизни — это лекции в переполненных залах, где он делится с людьми полученными знаниями. С большим вдохновением и энтузиазмом он читает лекции, проводит семинары перед самой широкой аудиторией слушателей, принимает участие в беседах за круглым столом с учеными, философами, деятелями культуры.
                    </HakimovP>
                    <HakimovP>
                        Дело жизни Александра Геннадьевича Хакимова — нести людям знание, раскрывающее вечные законы бытия. Его лекциям присущи строгость и чистота, необычайно яркая образность и доходчивость. В них одна за другой раскрываются тайны ведической мудрости, предоставляя нам понимание практического применения в жизни высокой трансцендентной философии. Он говорит свежо и увлеченно, чаруя слушателей своим удивительным обаянием, и чем больше мы размышляем над его словами, тем отчетливее начинаем осознавать их мудрость и глубину.
                    </HakimovP>
               </div>
           </div>
       </HakimovBlock>
    );
};

export default AboutLife;