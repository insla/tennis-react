import './Header.scss';
import logo from '../../resources/img/main_page/logo.png';
import arrowDown from '../../resources/icons/arrow-down.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <nav className="navigation">
                <div className="container">
                    <div className="navigation__wrapper">
                        <a href="#" className="navigation__logo"><img src={logo} alt="logo"/></a>
                        <ul className="menu">
                            <li className="menu__item"><a href="index.html">Главная</a></li>
                            <li className="menu__item"><a href="about.html">О клубе</a></li>
                            <li className="menu__item menu__item-drop-li">
                                <a href="#">Услуги</a>
                                <img src={arrowDown} alt="arrow-down"/>
                                <ul className="menu__dropdown">
                                    <li className="menu__item-dropdown"><a href="kids.html">Тренировки для детей</a></li>
                                    <li className="menu__item-dropdown"><a href="personal.html">Персональные тренировки</a></li>
                                    <li className="menu__item-dropdown"><a href="group.html">Групповые тренировки</a></li>
                                </ul>
                            </li>
                            <li className="menu__item"><a href="price.html">Цена</a></li>
                            <li className="menu__item"><a href="news.html">Новости</a></li>
                            <li className="menu__item"><a href="contacts.html">Контакты</a></li>
                        </ul>
                        
                        <div className="navigation__icon">
                            <a><FontAwesomeIcon className="navigation__item" icon = {faYoutube}></FontAwesomeIcon></a>
                            <a><FontAwesomeIcon className="navigation__item" icon = {faVk}></FontAwesomeIcon></a>
                            <a><FontAwesomeIcon className="navigation__item" icon = {faTelegram}></FontAwesomeIcon></a>
                        </div>
                        <div className="navigation__hamburger">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="navigation__line"></div>
            </nav>

            <section className="header">
                <div className="container">
                    <h1>Теннисный клуб <br/> Sunrise</h1>
                    <a href="https://youtube.com" className="header__link-youtube">
                        <div className="main__circle">
                            <div className="header__link-play"><FontAwesomeIcon icon = {faPlay}></FontAwesomeIcon></div>
                        </div>               
                        <div className="header__link-text"><p>Посмотрите видео о нашем клубе</p></div>
                    </a>
                </div>
            </section>
        </>
    )
}
export default Header;