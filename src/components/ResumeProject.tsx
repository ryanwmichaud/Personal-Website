import React from "react";

interface ResumeProjectProps{
    title: string
    technologies: string
    thumbnail: string
    descriptions: string[]
    titleLink: string
    thumbnailLink: string

}

const ResumeProject: React.FC<ResumeProjectProps> = ({title, technologies, thumbnail, descriptions, titleLink, thumbnailLink})=>{

    return(
       

        <div className="resume-project">
            <div className="resume-project-title">
                <a className="resume-project-name" href={titleLink}>{title}</a>
                <p className="resume-divider">-</p>
                <p className="resume-project-technologies">{technologies}</p>
            </div>
            <div className="resume-project-container">
                <a href={thumbnailLink}>
                    <img className="resume-project-thumbnail" src={thumbnail} alt="project thumbnail"></img>
                </a>
               
                <div className="resume-project-descriptions">      
                    {descriptions.map( (description, index) =>(
                        <div className="bullet-and-resume-project-description" key={"bullet-and-resume-project-description"+index}>
                            <p className="resume-project-bullet" key={"resume-project-bullet"+index}>•</p>
                            <p className="resume-project-description" key={"resume-project-description"+index}> {description} </p>
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