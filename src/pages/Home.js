import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Home = ()=>{





    return(
        <div className="background">
            <Navbar></Navbar>
            <div className="page" > 

                <p className="page-title">Ryan Michaud</p>
                <div className="home-greeting">

                    <p> My name is Ryan Michaud and I'm a software developer based in Ann Arbor, MI. Check out some of my projects below</p>

                </div>

       
            </div>

                
            <div className="bottom-page" > 
                
                 

                
        

            </div>
            <Footer></Footer>

        </div>
    )
}


export default Home;
