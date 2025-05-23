import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Circles2 from "../backgrounds/Circles2";

const About = ()=>{

    return(
        <div className="background">
            <Circles2/>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">About</p>

            </div>
            <Footer></Footer>

        </div>
    )
}


export default About;