import { useState } from 'react';
import { HashLink } from 'react-router-hash-link'; 
import { Link } from 'react-router-dom';

// import css
import '../components/head-fo.css';

//! niet zomaar veranderen
//* testen haslink via andere pagina's
const Header = () => {
    return (
        <header>
            <nav>
                <div className="title-header-container">
                    <Link to="/#">
                        <div className="titel-header">
                            <img src="src/assets/go-kart.png" alt="go-kart" width={60} height={50}/>
                            <div className="lijn">

                            </div>
                            <div className="naam">
                                <h2>KartQuest</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <ul className="nav-menu">
                    <li><Link to="/inschrijven">Inschrijven</Link></li>
                    <li><Link to="/teams">Teams</Link></li>
                    <li><HashLink to="/#Contact">Contact</HashLink></li>
                </ul>

                <HamburgerMenu/>
            </nav>
        </header>
    )
}


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        document.getElementById("myNav").style.height = "100%";
        setIsOpen(true); // Zorg ervoor dat het menu geopend is
    };

    const closeNav = () => {
        document.getElementById("myNav").style.height = "0%";
        setIsOpen(false); // Zorg ervoor dat het menu gesloten is
    };

    return (
        <>
            {/* Hamburger icon */}
            <div className="hamburger" onClick={openNav}>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </div>

            {/* Links die verschijnen in het hamburger-menu */}
            <div id="myNav" className="overlay">
                <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
                <div className="overlay-content">
                    <Link to="/inschrijven" onClick={closeNav}>Inschrijven</Link>
                    <Link to="/teams" onClick={closeNav}>Teams</Link>
                    <HashLink to="/#Contact" onClick={closeNav}>Contact</HashLink>
                </div>
            </div>
        </>
    );
}

export default Header