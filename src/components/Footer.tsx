import { Link } from 'react-router-dom';


const Footer = ()=>{

    return(
        <div className='footer'>

            <div className='footer-lines'>
                <p className='footer-1'> © 2024 Ryan Michaud. </p>
                <p className='footer-2'> All rights reserved. </p>
            </div>
            
            <nav className='footer-nav-links'>
                <Link className="footer-link" to={"/"}>Home</Link> 
                <div className='footer-spacer'> | </div>
                <Link className="footer-link" to={"/resume"}>Resume</Link>
                <div className='footer-spacer'> | </div>
                <Link className="footer-link" to={"/contact"}>Contact</Link>
            </nav>
            <div className="footer-social-links">
                <a  className="footer-link" href="https://linkedin.com/in/ryanwmichaud">LinkedIn</a> 
                <div className='footer-spacer'> | </div>
                <a  className="footer-link" href="https://github.com/ryanwmichaud">GitHub</a>
            </div>
        </div>
    )

}

export default Footer