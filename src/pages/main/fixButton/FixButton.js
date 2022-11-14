import './FixButton.scss';
import Modal from '../../../components/modal/Modal';
import ModalContent from '../../../components/modalContent/ModalContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const FixButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [modalActive, setModalActive] = useState(false);
    const [formSent, setFormSent] = useState(false);

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
        <section>
            <div className="container">
                {isVisible && 
                    <div className="modal-and-up modal-and-up_arrow" onClick={() => pageUp()}>
                        <FontAwesomeIcon className="modal-and-up__icon" icon={faArrowUp}></FontAwesomeIcon>
                    </div>
                }
                    
                <div className="modal-and-up modal-and-up_phone" onClick={() => setModalActive(true)}>
                    <FontAwesomeIcon className="modal-and-up__icon" icon={faPhone}></FontAwesomeIcon>
                </div>
                
                <Modal 
                    active={modalActive} 
                    setActive={setModalActive} 
                    title={formSent ? 'Ожидайте звонок в течении 30 минут' :'Введите данные и мы вам перезвоним'}>
                        {formSent ? 
                            <p style={{ textAlign: 'center', fontSize: '18px', marginTop: '20px'}}>Данные получены</p>
                            : <ModalContent setFormSent={setFormSent} setActive={setModalActive}/>
                        }
                </Modal>
            </div>
        </section>
    )

}

export default FixButton;