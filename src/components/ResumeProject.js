import React from "react";

const ResumeProject = ({title, thumbnail, descriptions, titleLink, thumbnailLink})=>{

    return(
       

        <div className="resume-project">
            <a className="resume-project-title" href={titleLink}>{title}</a>
            <div className="resume-project-container">
                <a href={thumbnailLink}>
                    <img className="resume-project-thumbnail" src={thumbnail}></img>
                </a>
               
                <div className="resume-project-descriptions">      
                    {descriptions.map( (description, index) =>(
                        <div className="bullet-and-resume-project-description">
                            <p className="resume-project-bullet">•</p>
                            <p className="resume-project-description" key={index}> {description} </p>
                        </div>
                    ))}
                </div>

            </div>

        </div>

       
    )
}




export default ResumeProject;

/*

*/