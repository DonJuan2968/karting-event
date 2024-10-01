import { useState } from 'react';
import { HashLink } from 'react-router-hash-link'; 
import { Link } from 'react-router-dom';

// import css
import '../components/head-fo.css';

//! niet zomaar veranderen

const Header = () => {
    return (
        <header>
            <nav>
                <div className="title-header-container">
                    <Link to="/">
                        <div className="titel-header">
                            <img src="src/assets/go-kart.png" alt="go-kart" width={70} height={60}/>
                            <div className="lijn">

                            </div>
                            <div className="naam">
                                <h2>KartQuest</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <HamburgerMenu/>
            </nav>
        </header>
    )
}


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Hamburger icon */}
            <div className="hamburger" onClick={toggleMenu}>
            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 12L20 12" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round"/>
            <path d="M4 6L20 6" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </div>

            {/* Links die verschijnen in het hamburger-menu */}
            <ul className={`menu ${isOpen ? 'open' : ''}`}>
                <li><Link to="/inschrijven">Inschrijven</Link></li>
                <li><Link to="/poules">Poules</Link></li>
            </ul>
        </>
    );
}

export default Header