import Navigation from "../../components/navigation/Navigation";
import Header from "./header/Header";
import Footer from "../../components/footer/Footer";
import Club from "./club/Club";
import Courts from "./courts/Courts";
import Assist from "./assist/Assist";
import Coach from "./coach/Coach";

const Main = () => {
    return (
        <>
            <Navigation/>
            <Header/>
            <Club/>
            <Courts/>
            <Assist/>
            <Coach/>
            <Footer/>
        </>
    )
}

export default Main;