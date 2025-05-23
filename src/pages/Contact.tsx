import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Circles2 from "../backgrounds/Circles2"

const Contact = ()=>{

    return(
        <div className="background">
            <Circles2></Circles2>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">Contact</p>
                    <p>You can reach me at ryanwmichaud@gmail.com</p>
                    <p>On Github at <a href="https://github.com/ryanwmichaud">ryanwmichaud</a></p>
                    <p>On LinkdIn at <a href="https://www.linkedin.com/in/ryanwmichaud">Ryan Michaud</a></p>
                    
                    

            </div>
            <Footer></Footer>

        </div>
    )
}


export default Contact;