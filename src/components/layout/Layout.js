import Header from "../header/Header";
import Footer from "../footer/Footer";
import FixButton from '../../components/fixButton/FixButton';

const Layout = ({children}) => {
    return (
        <>
            <Header/>
                <main>{children}</main>
            <Footer/>
            <FixButton/>
        </>
    )
}

export default Layout;