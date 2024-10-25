import React from "react";

const Project = ({title, thumbnail, description, technologies, titleLink, thumbnailLink})=>{

    return(


            <div className="project">
                <a className="project-title" href={titleLink}>{title}</a>
                <div className="project-container">
                    <a href={thumbnailLink}>
                        <img className="project-thumbnail" src={thumbnail} alt="project-thumbnail"></img>
                    </a>
                    <div className="project-description-container">
                        <p className="project-description">{description}</p>
                        <p className="project-technologies">{technologies}</p>
                    </div>

                </div>

            </div>

    )
}


export default Project;