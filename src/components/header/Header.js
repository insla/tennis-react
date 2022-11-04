import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import Navigation from '../navigation/Navigation';


const Header = () => {
    window.scrollTo(0, 0)
    const path = useLocation().pathname
    const location = path.split("/")[1]

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
            <Navigation location={location}/>

            <section className={`heading heading_${location} ${location === '' ? '' : 'heading_size'}`}>
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