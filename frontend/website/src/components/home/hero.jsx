// import packages
import { Link } from 'react-router-dom'

// import css
import '../home/background.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h2>Welkom bij KartQuest 2024</h2>
                <p>het ultieme karttoernooi dat plaatsvindt op 18/10/2024 bij Powerarea in Lemiers Vaals.</p>
                <p>Doe mee aan KartQuest 2024 en beleef een onvergetelijke race ervaring.</p>
                <p>Schrijf je nu in strijd tegen andere racers in spannende poules,</p>
                <p>en win fantastische prijzen.</p>
                <Link to="/inschrijven">
                    <button className="hero-button">
                        Schrijf je nu in
                    </button>
                </Link>
            </div>
            <div className="scroll-indicator">
                <span>&darr;</span> {/* Pijl naar beneden */}
            </div>
        </section>
    )
}

export default Hero