import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

const Layout = ({children}) => {
    return (
        <>
            <Navigation/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;