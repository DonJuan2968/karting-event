// import css
import './home.css';


// import modules
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons'

const Home = () => {
    const [totalInschrijvingen, setTotalInschrijvingen] = useState(0)
    const [totalTeams, setTotalTeams] = useState(0)

    // Ophalen van totaal aantal inschrijvingen en teams
    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/inschrijvingencijfer')
            .then(response => {
                setTotalInschrijvingen(response.data.total_inschrijvingen)
            })
            .catch(error => {
                console.error("Er is iets fout gegaan met het ophalen van de inschrijvingencijfer", error)
            })

        axios.get('http://localhost:5000/api/admin/teamscijfer')
            .then(response => {
                setTotalTeams(response.data.total_teams)
            })
            .catch(error => {
                console.error("Er is iets fout gegaan met het ophalen van de teamscijfer", error)
            })
    }, [])

    return (
        <div className="content-home-container">
            <div className="home-titel">
                <h2>Welkom Bij De Admin-Panel</h2>
            </div>
            <div className="data-container">
            <Link className='links-data-container' to="/users">
                <div className="inschrijf-container">
                    <h2>Totaal Aantal Inschrijvingen</h2>
                    <div className="count-container">
                        <div className="inschrijvingen-count count">
                            <p>{totalInschrijvingen}</p>
                        </div>
                    </div>
                </div>
            </Link>
            <Link className='links-data-container' to="/teams">
                <div className="teams-container">
                    <h2>Totaal Aantal Teams</h2>
                    <div className="count-container">
                        <div className="teams-count count">
                            <p>{totalTeams}</p>
                        </div>
                    </div>
                </div>
            </Link>
            </div>
            <div className="data-container-berichten">
                <div className="home-titel2">
                    <h2>Berichten</h2>
                </div>
                <div className="berichten-container">
                    <div className="bericht-item">
                        <div className="bericht-titel-container">
                            <h3>user1</h3>
                            <h3>test@vistacollege.nl</h3> {/* TODO link voor te mailen */}
                            <button className="delete-button" onClick={() => console.log('Delete button clicked')}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                        <div className="bericht-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, mauris sed consectetur congue, justo arcu interdum velit, vel dapibus arcu enim id ex. Donec vel metus a est congue dapibus.</p>
                        </div>
                    </div>
                    <div className="bericht-item">
                        <div className="bericht-titel-container">
                            <h3>user1</h3>
                            <h3>test@vistacollege.nl</h3>
                            <button className="delete-button" onClick={() => console.log('Delete button clicked')}>
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                        </div>
                        <div className="bericht-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, mauris sed consectetur congue, justo arcu interdum velit, vel dapibus arcu enim id ex. Donec vel metus a est congue dapibus.</p>
                        </div>
                    </div>
                    <div className="bericht-item">
                        <div className="bericht-titel-container">
                            <h3>user1</h3>
                            <h3>test@vistacollege.nl</h3>
                        </div>
                        <div className="bericht-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, mauris sed consectetur congue, justo arcu interdum velit, vel dapibus arcu enim id ex. Donec vel metus a est congue dapibus.</p>
                        </div>
                    </div>
                    <div className="bericht-item">
                        <div className="bericht-titel-container">
                            <h3>user1</h3>
                            <h3>test@vistacollege.nl</h3>
                        </div>
                        <div className="bericht-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, mauris sed consectetur congue, justo arcu interdum velit, vel dapibus arcu enim id ex. Donec vel metus a est congue dapibus.</p>
                        </div>
                    </div>
                    <div className="bericht-item">
                        <div className="bericht-titel-container">
                            <h3>user1</h3>
                            <h3>test@vistacollege.nl</h3>
                        </div>
                        <div className="bericht-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, mauris sed consectetur congue, justo arcu interdum velit, vel dapibus arcu enim id ex. Donec vel metus a est congue dapibus.</p>
                        </div>
                    </div>
                    <div className="bericht-item">
                        <div className="bericht-titel-container">
                            <h3>user1</h3>
                            <h3>test@vistacollege.nl</h3>
                        </div>
                        <div className="bericht-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, mauris sed consectetur congue, justo arcu interdum velit, vel dapibus arcu enim id ex. Donec vel metus a est congue dapibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home