import React from "react";

const Work = ({position, location, date, company, descriptions})=>{


    return(

        <div className="work">
            <div className="work-title">
                <p className="work-position" >{position}</p>
                <p className="resume-divider">-</p>
                <p className="work-company" >{company}</p>
                <p className="resume-divider">-</p>
                <p className="work-location" >{location}</p>
            </div>
        <p className="work-date" >{date}</p>
        <div className="work-descriptions">      
                {descriptions.map( (description, index) =>(
                    <div className="bullet-and-work-description" key={"bullet-and-work-description"+index}>
                        <p className="work-bullet" key={"work-bullet"+index}>•</p>
                        <p className="work-description" key={"work-description"+index}> {description} </p>
                    </div>
                ))}
        </div>

        </div>

    )
}


export default Work;