// import css
import './head-fo.css';

import { useState } from 'react';
import { HashLink } from 'react-router-hash-link'; 
import { Link } from 'react-router-dom';

import menuIcon from '../assets/hamburgermenu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <nav>
            <HamburgerMenu/>
                <div className="title-header-container">
                    <Link to="/">
                        <div className="naam">
                            <h2>Admin-Panel</h2>
                        </div>
                    </Link>
                </div>
                <div className="logout-container">
                    <Link to="/login">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} size='2x'/>
                    </Link>
                </div>
            </nav>
        </header>
    )
}


function HamburgerMenu() {

    const openNav = () => {
        const navElement = document.getElementById("myNav");
        if (window.innerWidth <= 768) {
            // Voor mobile schermen
            navElement.style.width = "100%"
        } else {
            // Voor desktop schermen
            navElement.style.width = "25%"
        }
        setIsOpen(true)
    }

    const closeNav = () => {
        document.getElementById("myNav").style.width = "0%"
        setIsOpen(false)
    }

    return (
        <>
            {/* Hamburger icon */}
            <div className="hamburger" onClick={openNav}>
                <img src={menuIcon} alt="menu" width={45} height={45} />
            </div>

            {/* Links in het hamburger-menu */}
            <div id="myNav" className="overlay">
                <a className="closebtn" onClick={closeNav}><FontAwesomeIcon icon={faCircleXmark} /></a>
                <div className="overlay-content">
                    <Link to="/content" onClick={closeNav}>ContentManager</Link>
                    <Link to="/users" onClick={closeNav}>UserManager</Link>
                    <HashLink to="/teams" onClick={closeNav}>TeamsManager</HashLink>
                </div>
            </div>
        </>
    )
}

export default Header