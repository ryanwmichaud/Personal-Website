import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ResumeProject from "../components/ResumeProject";
import Work from "../components/Work"


const Resume = ()=>{

    return(
        <div className="background">
            <Navbar></Navbar>

            <div className="page">
                
                

                
            <div className="resume-contact-section">

                <p className="resume-name">Ryan Michaud</p>
                <p className="resume-contact">(708)-247-9086</p>                
                <p className="resume-contact">ryanwilliammichaud@gmail.com</p>
                <p className="resume-address">Ann Arbor, MI 48103</p>
                <div className="resume-socials">
                    <a className="resume-github" href="https://github.com/ryanwmichaud" > GitHub </a>
                    <p className="resume-divider">|</p>
                    <a className="resume-linkedin" href="https://www.linkedin.com/in/ryanwmichaud/"> LinkedIn </a>
                </div>
                

            </div>




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

            <div className="skills-section">
                <p className="skills-heading">SKILLS</p>
                <p className="skills-1">Python, Java, C++, JavaScript, SQL, Express, React, Flask</p>
                <p className="skills-2">                Git, Unix/Linux, AWS (EC2, S3, RDS, CodeBuild), Docker </p>
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
                    descriptions={[ "Assisted students with debugging Python and Java code.",
                                    "Used automated testing suites to grade lab and problem set submissions."
                    ]}
                ></Work>
            </div>

            <div className="projects-section">
                <p className="projects-heading">PROJECTS</p>
                <ResumeProject title={"Chord Voicing Finder"}
                                technologies={"Node.js, React, Express, MYSQL"}
                                thumbnail={"/projects/ChordFinder/chord-thumb.png"}
                                descriptions={[ "Designed an algorithm which finds every possible way that a given group of notes can be played simultaneously on a string instrument. Supports any number of strings in any tuning.",
                                                "Built a front end which takes user input and generates diagram visualizations of the results.",
                                                "Implemented secure token based user authentication and integrated a Google sign in option for users to save their preferences and favorite voicings."] 
                                                }
                                titleLink={"http://3.131.139.197:8000/"}
                                thumbnailLink={"https://github.com/ryanwmichaud"}>
                </ResumeProject>
                <ResumeProject title={"Harmonizer Plugin"}
                                technologies={"C++, JUCE Framework"}                                
                                thumbnail={"/projects/Harmonizer/harmonizer-thumb.png"}
                                descriptions={[ "Built a MIDI plugin for a DAW which allows users to explore constant structure harmony by harmonizing incoming MIDI notes in real time with all possible inversions of a user provided structure.",
                                                "Created a console app to run unit tests and ensure future changes do not compromise core functionality."] 
                                                }
                                titleLink={"https://github.com/ryanwmichaud/HarmonizerPlugin"}
                                thumbnailLink={"https://github.com/ryanwmichaud/HarmonizerPlugin"}>
                </ResumeProject>
                <ResumeProject title={"Personal Website"}
                                technologies={"HTML, CSS, JavaScript, React.js"}
                                thumbnail={"projects/Website/website-thumbnail.png"}
                                descriptions={[ "Built and designed a custom, responsive website from scratch to share my personal projects."] 
                                                }
                                titleLink={"https://github.com/ryanwmichaud/Personal-Website"}
                                thumbnailLink={"https://github.com/ryanwmichaud/Personal-Website"}>
                </ResumeProject>
                

            </div>

            <a className="download-resume" href="resume.pdf">View Resume PDF</a>
            







                
                
            </div>
            <Footer></Footer>

        </div>
    )
}


export default Resume;