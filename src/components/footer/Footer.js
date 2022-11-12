import './Footer.scss';
import logo from '../../resources/img/main_page/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faVk, faTelegram, faInstagram, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faPhone, faLocationDot, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import ModalContent from '../modalContent/ModalContent';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
            window.removeEventListener("scroll", listenToScroll); 
    }, [])
    
    const listenToScroll = () => {
        const heightToHideFrom = 800;
        const winScroll = document.documentElement.scrollTop;

        winScroll > heightToHideFrom ? setIsVisible(true) : setIsVisible(false)
    };

    const pageUp = () => {
        window.scroll({
            top: 0, 
            behavior: 'smooth',
        });
    }

    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__line"></div>
                    <div className="footer__wrapper">
                        <NavLink to='/' className="navigation__logo">
                            <img src={logo} alt="logo"/>
                        </NavLink>
                        <div className="footer__info">
                            <div className="footer__address">
                                <a href="#" className="footer__link">
                                    <FontAwesomeIcon className="footer__icon" icon = {faLocationDot}></FontAwesomeIcon>
                                    Теннисный клуб Sunrise, ул. Бутлерова, 9, Санкт-Петербург, Россия, 195220
                                </a>
                            </div>
                            <div className="footer__mobile">
                                <a href="#" className="footer__link">
                                    <FontAwesomeIcon className="footer__icon" icon = {faPhone}></FontAwesomeIcon>
                                    +7 (199) 232 22 22
                                </a>
                            </div>
                            <div className="footer__telegram">
                                <a href="#" className="footer__link">
                                    <FontAwesomeIcon className="footer__icon" icon = {faTelegram}></FontAwesomeIcon>
                                    @sunrise_tennis
                                </a>
                            </div>
                        </div>
                        <div className="footer__social">
                            <p>Social Media</p>
                            <a href="#"><FontAwesomeIcon className="footer__item" icon = {faYoutube}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="footer__item" icon = {faVk}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="footer__item" icon = {faTelegram}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="footer__item" icon = {faInstagram}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="footer__item" icon = {faFacebook}></FontAwesomeIcon></a>
                            <a href="#"><FontAwesomeIcon className="footer__item" icon = {faTwitter}></FontAwesomeIcon></a>
                        </div>
                    </div>
                    <div className="footer__line footer__line_white"></div>
                    <div className="footer__navigation">
                        <div className="footer__feedback">
                            <p>Мы вам перезвоним</p>
                            <input type="tel" placeholder="Ваш номер телефона"/>
                            <button><FontAwesomeIcon icon = {faPhone}></FontAwesomeIcon></button>        
                        </div>
                        <p>Copyright © 2022 • Теннисный клуб Sunrise.</p>
                    </div>
                </div>
            </footer>

            {isVisible && 
                <div className="modal-and-up modal-and-up_arrow" onClick={() => pageUp()}>
                    <FontAwesomeIcon className="modal-and-up__icon" icon={faArrowUp}></FontAwesomeIcon>
                </div>
            }

            <div className="modal-and-up modal-and-up_modal" onClick={() => setModalActive(true)}>
                <FontAwesomeIcon className="modal-and-up__icon" icon={faPhone}></FontAwesomeIcon>
            </div>

            <Modal active={modalActive} setActive={setModalActive} title={'Введите данные и мы вам перезвоним'}>
                <ModalContent/>
            </Modal>
        </>
    )
}

export default Footer;