import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gauss from "../backgrounds/Gauss";
import Circles from "../backgrounds/Circles";

const About = ()=>{

    return(
        <div className="background">
            <Circles/>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">About</p>

            </div>
            <Footer></Footer>

        </div>
    )
}


export default About;