import React, {useState} from 'react';
import Logo from "../../UI/Logo/Logo";
import Search from "../../UI/Search/Search";
import cl from './Header.module.css'
import IcoButton from "../../UI/IcoButton/IcoButton";
import HamburgerButton from "../../UI/HamburgerButton/HamburgerButton";
import favorite from '../../Assets/Icons/icons-main-favorite_2px.svg'
import cart from '../../Assets/Icons/icons-main-cart_2px.svg'
import ModalHakimov from "../../UI/ModalHakimov/ModalHakimov";
import ico from '../../Assets/Icons/icon-arrow-right-16px.svg'
import menuimg from '../../Assets/Test/PictureMenu.png'
import {MenuInfo} from "../Footer/Templates/menuinfo";
import closeimg from "../../Assets/Icons/icons-main-close.svg";
import {Link, useNavigate} from "react-router-dom";

const Header = () => {
    const [menu, setMenu] = useState(false)
    const navigate = useNavigate();

    return (
        <>
        <header className={cl.header}>
            <div className={cl.content}>
                <div className={cl.leftMenu}>
                    <Logo/>
                    <Search/>
                </div>
                <div className={cl.rightMenu}>
                    <div className={cl.mainMenu}>
                        <Link to={'/about'}>Об авторе</Link>
                        <a>Каталог</a>
                        <a>Веды</a>
                        <a>Контакты</a>
                        <a>График</a>
                        <a>Поддержать</a>
                    </div>
                    <div className={cl.secondMenu}>
                        <div className={cl.buttons}>
                            <IcoButton ico={favorite}/>
                            <IcoButton ico={cart}/>
                        </div>
                        <div>
                            <HamburgerButton onClick={() => setMenu(true)}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
            <ModalHakimov isVisible={menu} setIsVisible={setMenu}>
                <div className={cl.modalContent}>
                    <button className={cl.close} onClick={() => setMenu(false)}>
                        <img src={closeimg} alt={'close'}/>
                    </button>
                    <div className={cl.col1}>
                        <h3 className={cl.menuTitle}>Меню</h3>
                        {
                            MenuInfo.map((item, index) => (
                                <div key={index} className={cl.menuCol}>
                                    <h5>{item.name}</h5>
                                    <div className={cl.menuColItems}>
                                        {item.links.map((link, key) => (
                                            <a key={key}>{link}</a>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={cl.col2}>
                        <img className={cl.menuImg} src={menuimg} alt={'book'}/>
                        <span className={cl.col2Title}>Где бы мы ни увидели с вами что-то изумительное и прекрасное, мы должны знать, что там побывала истинная Красота и оставила свой след</span>
                        <span className={cl.col2Sourse}>Александр Хакимов / Эволюция красоты <img src={ico} alt={'arrow'}/></span>
                    </div>
                </div>
            </ModalHakimov>
        </>
    );
};

export default Header;