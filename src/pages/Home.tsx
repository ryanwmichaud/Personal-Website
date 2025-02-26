import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HomeBackground from "../components/HomeBackground"



const Home = ()=>{





    return(
        <div className="background">
            
            <HomeBackground/>
            
            <Navbar></Navbar>
            <div className="page" > 

                <p className="page-title">Ryan Michaud</p>
                <div className="home-greeting">
                    <p> My name is Ryan Michaud and I'm a software developer based in Ann Arbor, MI. Check out some of my projects below</p>
                </div>

                    <h3 className="home-subtitle">Thing</h3>
                    <p className="home-description">description of the thing</p>
       
            </div>

                
            <div className="bottom-page" > 
                
                 

                
        

            </div>
            <Footer></Footer>

        </div>
    )
}


export default Home;
