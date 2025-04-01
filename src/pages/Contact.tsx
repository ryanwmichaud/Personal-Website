import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gauss from "../backgrounds/Gauss"

const Contact = ()=>{

    return(
        <div className="background">
            <Gauss></Gauss>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">Contact</p>

            </div>
            <Footer></Footer>

        </div>
    )
}


export default Contact;