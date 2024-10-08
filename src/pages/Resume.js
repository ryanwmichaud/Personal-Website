import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Resume = ()=>{

    return(
        <div>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">Resume</p>
                <div className="resume-container">

                    <iframe className="resume" src="/resume.pdf#zoom=FitH"> </iframe>

                </div>
                
            </div>
            <Footer></Footer>

        </div>
    )
}


export default Resume;