import './Navigation.scss';
import logo from '../../resources/img/main_page/logo.png';
import arrowDown from '../../resources/icons/arrow-down.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const Navigation = ({location}) => {
    const [showMenu, setShowMenu] = useState(false);

    const isMobile = useMediaQuery({ query: `(max-width: 767px)` });

    const hideMenu = () => {
        setShowMenu(false)
    }

    return (
        <nav className={`navigation navigation_${location}`}>
            <div className="container">
                <div className="navigation__wrapper">
                    <NavLink to='/' className="navigation__logo">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                    <ul className="menu" style={showMenu && isMobile ? {top : '0'} : null}>
                        <li className="menu__item">
                            <NavLink 
                                onClick={hideMenu} 
                                to='/' end 
                                className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                Главная
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink 
                                onClick={hideMenu}  
                                to='/about' 
                                className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                О клубе
                            </NavLink>
                        </li>
                        <li className="menu__item menu__item-drop-li">
                            <a className={`menu__link ${location === 'kids' || location === 'personal' || location === 'group' 
                                ? 'active' 
                                : ''}`} 
                                href="#">
                                Услуги
                            </a>
                            <img src={arrowDown} alt="arrow-down"/>
                            <ul className="menu__dropdown">
                                <li className="menu__item-dropdown">
                                    <NavLink 
                                        onClick={hideMenu} 
                                        to='/kids' 
                                        className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                        Тренировки для детей
                                    </NavLink>
                                </li>
                                <li className="menu__item-dropdown">
                                    <NavLink 
                                        onClick={hideMenu} 
                                        to='/personal' 
                                        className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                        Персональные тренировки
                                    </NavLink>
                                </li>
                                <li className="menu__item-dropdown">
                                    <NavLink 
                                        onClick={hideMenu} 
                                        to='/group' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                        Групповые тренировки
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <NavLink 
                                onClick={hideMenu} 
                                to='/price' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                Цена
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink 
                                onClick={hideMenu} 
                                to='/news' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                Новости
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink 
                                onClick={hideMenu} 
                                to='/contacts' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>
                                Контакты
                            </NavLink>
                        </li>
                    </ul>

                    <div onClick={() => setShowMenu(true)} className="menu__hamburger">
                        <span></span>
                    </div>
                    <div 
                        onClick={hideMenu}
                        style={showMenu && isMobile 
                            ? {display: 'block'}    
                            : null} className="menu__close-hamburger">
                            ✖
                    </div>
                    
                    <div className="navigation__icon">
                        <a><FontAwesomeIcon className="navigation__item" icon = {faYoutube}></FontAwesomeIcon></a>
                        <a><FontAwesomeIcon className="navigation__item" icon = {faVk}></FontAwesomeIcon></a>
                        <a><FontAwesomeIcon className="navigation__item" icon = {faTelegram}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            <div className="navigation__line"></div>
        </nav>
    )
}
export default Navigation;