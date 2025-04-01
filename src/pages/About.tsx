import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gauss from "../backgrounds/Gauss";

const About = ()=>{

    return(
        <div className="background">
            <Gauss/>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">About</p>

            </div>
            <Footer></Footer>

        </div>
    )
}


export default About;