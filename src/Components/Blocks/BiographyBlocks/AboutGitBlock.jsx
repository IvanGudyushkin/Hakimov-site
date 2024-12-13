import React from 'react';
import cl from './AboutOriginsBlock.module.css'
import HakimovTitle from "../../../UI/HakimovTitle/HakimovTitle";
import HakimovMediumP from "../../../UI/HakimovMediumP/HakimovMediumP";
import HakimovP from "../../../UI/HakimovP/HakimovP";
import circleimg2 from "../../../Assets/biography/Ellipse 2 - biography.webp";
import img3 from "../../../Assets/biography/img-biography-3.webp";
import img4 from "../../../Assets/biography/img-biography-4.webp";
import HakimovBlock from "../../../UI/HakimovBlock/HakimovBlock";
const AboutGitBlock = () => {
    return (
        <HakimovBlock>
            <HakimovTitle title={'Знакомство с Бхагавад-гитой'}/>
            <div className={cl.row}>
                <div className={cl.col1}>
                    <HakimovMediumP>
                        В двадцать три года я уже знал, что жизнь не заканчивается после смерти. Мне удалось выйти из своего физического тела сразу же после того, как я первый раз в своей жизни обратился за помощью к Богу.
                    </HakimovMediumP>
                    <div className={cl.micro}>
                        <HakimovP>
                            В 1982-м году я поведал свои переживания одному опытному наркоману, он внимательно выслушал
                            и сказал, что у него кое-что есть для меня. На следующий день он принёс маленькую книгу
                            Шрилы Прабхупады «Вне времени и пространства». Это было здорово! Мои ожидания подтвердились
                            — можно научиться путешествовать на другие планеты в духовном теле! Древние книги «Веды»
                            говорили об этом ещё тысячи лет назад! Напоследок мой случайный знакомый написал мне на
                            листке бумаги мантру «Харе Кришна Харе Кришна Кришна Кришна Харе Харе Харе Рама Харе Рама
                            Рама Рама Харе Харе» — и сказал, что она может спасти меня от любых проблем и опасностей.
                            Но, увы, мои спонтанные выходы из тела были неуверенными и наполненными всякой жутью. Дело
                            шло к разрушению моей жизни, и я думал, что теперь мне конец. Однако в ноябре 1985-го,
                            достигнув предела своих возможностей, я встретил преданных Кришны. «Спасение отныне», - так
                            прокомментировала перемену в нашей жизни моя жена.
                            <br/>
                            <br/>
                            Мой друг уговорил меня пойти на встречу с какими-то людьми, умеющими насыщать мантрами пищу.
                            До этого я уже был достаточно разочарован посещением различных молодёжных групп мистиков и
                            магов, но, чтобы не обидеть друга, согласился пойти с ним. На первой конспиративной
                            программе говорили о «Бхагавад-гите». Полный перевод этой книги я не мог нигде найти раньше,
                            но мне пообещали, что ее совсем скоро можно будет приобрести.
                        </HakimovP>
                        <HakimovP>
                        Потом ко мне подошёл один очень спокойный человек и сказал, что в следующей жизни можно
                            родиться кем угодно, даже обезьяной. Его звали странно — Шалаграм. Почему он это говорит
                            мне? Я немного обиделся. Но тут нас рассадили и начали раздавать прасад — какую-то слишком
                            ароматную пищу. Сначала предложили попробовать недоваренный рис, приправленный изрядным
                            количеством семян кориандра, который хрустел на зубах.
                            <br/>
                            <br/>
                            Затем подали халаву из обжаренного геркулеса с корицей и полностью затвердевшую от
                            расплавленного сахара. Я старательно грыз свою порцию, как вдруг внезапно начал
                            проваливаться в другое измерение. Мои щеки раскраснелись, и мощный прилив необъяснимой любви
                            и счастья выбросил меня в иной мир отношений (целую неделю потом я был, словно "не от мира
                            сего»). «Ага, — подумал я, — кажется, они добавили в пищу наркотики». Это надо разоблачить.
                            «Кто это готовил, и что тут за приправы?» — поинтересовался я, удивляясь собственной
                            смелости. Ко мне подошел довольно приятный парень и с радостью пригласил меня учиться
                            готовить. Я решил не отступать и в назначенный день пришёл по указанному адресу.
                            <img className={cl.circle} src={circleimg2} alt={'circle'}/>
                        </HakimovP>
                    </div>
                </div>
                <div className={cl.col2}>
                    <div className={cl.image}>
                        <img src={img3} alt={'pervoe izdanie'}/>
                        <span className={cl.description}>Первое русскоязычное издание 1972 г.</span>
                    </div>
                    <div className={cl.image}>
                        <img src={img4} alt={'sobranie'}/>
                        <span className={cl.description}>Собрания преданных, Санкт-Петербург</span>
                    </div>
                </div>
            </div>
        </HakimovBlock>
    );
};

export default AboutGitBlock;