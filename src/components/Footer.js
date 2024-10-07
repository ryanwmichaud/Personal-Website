import React from 'react'
import { Link } from 'react-router-dom';


const Footer = ()=>{

    return(
        <div className='footer'>

            <p> © 2024 Ryan Michaud. All rights reserved.  </p>

            <nav className='footer-nav-links'>
                <Link className="footer-link" to={"/"}>Home</Link> 
                <div className='footer-spacer'> | </div>
                <Link className="footer-link" to={"/about"}>About</Link>
            </nav>
            <div className="footer-social-links">
                <a  className="footer-link" href="https://linkedin.com/in/ryanwmichaud" target="_blank">LinkedIn</a> 
                <div className='footer-spacer'> | </div>
                <a  className="footer-link" href="https://github.com/ryanwmichaud" target="_blank">GitHub</a>
            </div>
        </div>
    )

}

export default Footer