import React from "react";

const Project = ({title, thumbnail, description, technologies})=>{

    return(
        <div>

            <div className="project">
                <p className="project-title">{title}</p>
                <div className="project-container">
                    <img className="project-thumbnail" src={thumbnail}></img>
                    <div className="project-description-container">
                        <p className="project-description">{description}</p>
                        <p className="project-technologies">{technologies}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}


export default Project;