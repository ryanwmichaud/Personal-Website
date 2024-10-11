import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Work from "../components/Work"


const Resume = ()=>{

    return(
        <div>
            <Navbar></Navbar>

            <div className="page">
                <p className="page-title">Resume</p>
                

            <div className="education-section">
                <p className="education-heading">EDUCATION</p>
                <div className="education-title">
                    <p className="education-name">Oberlin College</p> 
                    <p className="resume-divider">-</p>
                    <p className="education-location"> Oberlin, Ohio </p>
                </div>
                <p className="education-date"> August 2020 - May 2024 </p>
                <p className="education-description"> Bachelor’s in Computer Science and Musical Studies - 3.96 GPA   </p>

            </div>
            <div className="work-section">
                <p className="work-heading">EXPERIENCE</p>
                <Work position={"Programmer"} 
                    company={"Oberlin College Libraries"} 
                    location={"Oberlin, Ohio"} 
                    date={"September 2023 - June 2024"} 
                    descriptions={[ "Wrote and maintained Python scripts to automate the upload and downloads of digital resources via API integration with library databases.",
                        "Managed the deployment and upgrades of an open-source Ruby on Rails streaming application using Docker Containers with AWS (EC2, S3, CodeBuild).",
                        "Customized the UI to improve user experience and college branding."
                        ]}
                ></Work>
                <Work position={"Networking Assistant"} 
                    company={"Oberlin College CIT"} 
                    location={"Oberlin, Ohio"} 
                    date={"June 2023 - June 2024"} 
                    descriptions={[ "Responded to tickets troubleshooting and resolving physical, datalink, and network layer issues.",
                                    "Created thorough documentation detailing network configuration and infrastructure changes."
                                ]}
                ></Work>
                <Work position={"Lab Assistant/Grader"} 
                    company={"Oberlin College Computer Science"} 
                    location={"Oberlin, Ohio"} 
                    date={"February 2022 - February 2023"} 
                    descriptions={["Assisted students with debugging Python and Java code. Graded lab and problem set submissions."]}
                ></Work>
            </div>

            







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