import './Navigation.scss';
import logo from '../../resources/img/main_page/logo.png';
import arrowDown from '../../resources/icons/arrow-down.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <div className="navigation__wrapper">
                    <a href="#" className="navigation__logo"><img src={logo} alt="logo"/></a>
                    <ul className="menu">
                        <li className="menu__item">
                            <NavLink to='/' className='menu__link' activeClassName='active'>
                                Главная
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to='/about' className='menu__link' activeClassName='active'>
                                О клубе
                            </NavLink>
                        </li>
                        <li className="menu__item menu__item-drop-li">
                            <a className='menu__link' href="#">Услуги</a>
                            <img src={arrowDown} alt="arrow-down"/>
                            <ul className="menu__dropdown">
                                <li className="menu__item-dropdown">
                                    <NavLink to='/kids' className='menu__link' activeClassName='active'>
                                        Тренировки для детей
                                    </NavLink>
                                </li>
                                <li className="menu__item-dropdown">
                                    <NavLink to='/personal' className='menu__link' activeClassName='active'>
                                        Персональные тренировки
                                    </NavLink>
                                </li>
                                <li className="menu__item-dropdown">
                                    <NavLink to='/group' className='menu__link' activeClassName='active'>
                                        Групповые тренировки
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <NavLink to='/price' className='menu__link' activeClassName='active'>
                                Цена
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to='/news' className='menu__link' activeClassName='active'>
                                Новости
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink to='/contacts' className='menu__link' activeClassName='active'>
                                Контакты
                            </NavLink>
                        </li>
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
    )
}
export default Navigation;