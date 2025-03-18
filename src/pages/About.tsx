import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Colonies from "../backgrounds/Colonies";


const About = ()=>{

    return(
        <div className="background">
            <Colonies/>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">About</p>

            </div>
            <Footer></Footer>

        </div>
    )
}


export default About;