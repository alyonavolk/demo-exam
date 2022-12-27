import React, {useState} from 'react';
import './header.scss';

import logo from '../../resources/img/logo.svg';
import profile from '../../resources/img/Profile.svg';

const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className="header">
        <div className="header__content">
            <a className="header__img" href="#">
                <img src={logo} alt="logo" />
            </a>
            <div className={`header__menu ${menu ? 'header__menu_active' : ''}`} onClick={() => setMenu(!menu)}>
                <span></span>
            </div>
            <nav className={`header__nav ${menu ? 'header__nav_active' : ''}`}>
            <ul className="nav__items list-reset">
                    <li className="nav__item nav__item_active">
                        <a href="#">Главная</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Каталог</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Новые продукты</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">О нас</a>
                    </li>
                    <li className="nav__item">
                        <a href="#">Контакты</a>
                    </li>
                    <li className="nav__item nav__profile">
                       <a href="#"><img src={profile} alt="#" /></a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    );
};

export default Header;