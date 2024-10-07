import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>{

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenuOpen = () => {
        setMobileMenuOpen(!mobileMenuOpen)
        console.log("f")
    };

  return (
    <nav className="navbar">
        <div className='navbar-content'>
            <div className="navbar-logo-container">
                <Link className='navbar-logo' to="/">
                <p>Ryan Michaud</p>
                </Link>
            </div>
           
            <div className='navbar-link-container'>
                <Link className="navbar-link" to={"/"}>HOME</Link>
                <Link className="navbar-link" to={"/about"}>ABOUT</Link>
                <Link className="navbar-link" to={"/projects"}>PROJECTS</Link>
                <button className="navbar-link" onClick={toggleMobileMenuOpen}>MORE</button>

            </div>
            

            <button className="mobile-menu-open-button" onClick={toggleMobileMenuOpen}>
                ☰
            </button>
            <div className={`mobile-menu${mobileMenuOpen ? '-open' : '-closed'}`}>
                <button className="mobile-menu-close-button" onClick={toggleMobileMenuOpen}>×</button>
                
                <div className='mobile-menu-navbar-link-container'>
                    <Link className="mobile-menu-navbar-link" to={"/"}>HOME</Link>
                    <Link className="mobile-menu-navbar-link" to={"/about"}>ABOUT</Link>
                    <Link className="mobile-menu-navbar-link" to={"/projects"}>PROJECTS</Link>
                    <Link className="mobile-menu-navbar-link" to={"/contact"}>CONTACT</Link>
                </div>

            </div>

        </div>
    </nav>
  );
}

export default Navbar;