

// alle components
import Header from "../components/header"
import Hero from "../components/home/hero"
import Info from "../components/home/info"
import Prijzen from "../components/home/prijzen"
import Line from "../components/home/line"
import Contact from "../components/home/contact"
import Footer from "../components/footer"

//! niet zomaar veranderen

const  Home = () => {
    return (
        <div className="">
            <Header/>
            <Hero/>
            <Info/>
            <Prijzen/>
            <Line/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home