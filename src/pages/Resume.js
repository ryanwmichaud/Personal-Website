import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Resume = ()=>{

    return(
        <div>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">Resume</p>
                <div className="resume-container">

                <object className="resume" type="application/pdf" data="/resume.pdf#zoom=FitH">
                    <p>PDF cannot be displayed on this platform</p>
                    <a href="resume.pdf">Click to Download</a>
                </object>                   

                </div>
                
            </div>
            <Footer></Footer>

        </div>
    )
}


export default Resume;