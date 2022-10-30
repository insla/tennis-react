import './Header.scss';
import logo from '../../resources/img/main_page/logo.png';
import arrowDown from '../../resources/icons/arrow-down.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';


const Header = () => {
    const path = useLocation().pathname
    const location = path.split("/")[1]
    let sizeSection = '';

    if(location === '') {
        sizeSection = ''
    } else {
        sizeSection = 'heading_size'
    }

    if(location === 'kids' || location === 'personal' || location === 'group') {

    }

    const setContent = (text) => {
        switch (text) {
            case 'about' : 
                return <h2 className="title title_another-pages">О клубе</h2>
            case 'price' : 
                return <h2 className="title title_another-pages">Цена</h2>
            case 'news' : 
                return <h2 className="title title_another-pages">Новости</h2>
            case 'contacts' : 
                return <h2 className="title title_another-pages">Контакты</h2>
            case 'kids' : 
                return <h2 className="title title_another-pages">Услуги</h2>
            case 'personal' : 
                return <h2 className="title title_another-pages">Услуги</h2>
            case 'group' : 
                return <h2 className="title title_another-pages">Услуги</h2>
            default :
                console.log('not found')
        }
    }

    return (
        
        <header>
            <nav className={`navigation navigation_${location}`}>
                <div className="container">
                    <div className="navigation__wrapper">
                        <a href="#" className="navigation__logo"><img src={logo} alt="logo"/></a>
                        <ul className="menu">
                            <li className="menu__item">
                                <NavLink to='/' className='menu__link' end activeclassName='active'>
                                    Главная
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to='/about' className='menu__link' activeclassName='active'>
                                    О клубе
                                </NavLink>
                            </li>
                            <li className="menu__item menu__item-drop-li">
                                {/* <NavLink to='/assist' className='menu__link' activeclassName='active'>
                                    Услуги
                                </NavLink> */}
                                <a className={`menu__link ${location === 'kids' || location === 'personal' || location === 'group' ? 'active' : ''}`} href="#">Услуги</a>
                                <img src={arrowDown} alt="arrow-down"/>
                                <ul className="menu__dropdown">
                                    <li className="menu__item-dropdown">
                                        <NavLink to='/kids' className='menu__link' activeclassName='active'>
                                            Тренировки для детей
                                        </NavLink>
                                    </li>
                                    <li className="menu__item-dropdown">
                                        <NavLink to='/personal' className='menu__link' activeclassName='active'>
                                            Персональные тренировки
                                        </NavLink>
                                    </li>
                                    <li className="menu__item-dropdown">
                                        <NavLink to='/group' className='menu__link' activeclassName='active'>
                                            Групповые тренировки
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu__item">
                                <NavLink to='/price' className='menu__link' activeclassName='active'>
                                    Цена
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to='/news' className='menu__link' activeclassName='active'>
                                    Новости
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to='/contacts' className='menu__link' activeclassName='active'>
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

            <section className={`heading heading_${location} ${sizeSection}`}>
                <div className="container">
                    { location === '' ? (
                        <>
                            <h1>Теннисный клуб <br/> Sunrise</h1>
                            <a href="https://youtube.com" className="heading__link-youtube">
                                <div className="main__circle">
                                    <div className="heading__link-play"><FontAwesomeIcon icon = {faPlay}></FontAwesomeIcon></div>
                                </div>               
                                <div className="heading__link-text"><p>Посмотрите видео о нашем клубе</p></div>
                            </a>
                        </>
                    ) : (
                        <>
                            {setContent(location)}
                        </>
                    )}
                    
                </div>
            </section>
        </header>
    )
}

export default Header;