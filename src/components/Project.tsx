import React from "react";

interface ProjectProps{
    title: string
    thumbnail: string
    description: string
    technologies: string
    deployLink: string
    repoLink: string
}

const Project: React.FC<ProjectProps> = ({title, thumbnail, description, technologies, deployLink, repoLink})=>{

    return(

            <div className="project">
                <a className="project-title" href={deployLink}>{title}</a>
                <div className="project-container">
                    <a href={deployLink}>
                        <img className="project-thumbnail" src={thumbnail} alt="project-thumbnail"></img>
                    </a>
                    <div className="project-description-container">
                        <p className="project-description">{description}</p>
                        <p className="project-technologies">{technologies}</p>
                        <a className="project-repoLink" href={repoLink}>Github</a>
                    </div>

                </div>

            </div>

    )
}


export default Project;