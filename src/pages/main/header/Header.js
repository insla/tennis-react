import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
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