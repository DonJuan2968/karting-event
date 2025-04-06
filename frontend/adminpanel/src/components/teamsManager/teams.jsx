// import css
import './teams.css';

const Teams = () => {
    return (
        <div className="content-teams-container">
            <div className="teams-titel">
                <h2>Teams management</h2>
                <p>Hier kun je teams beheren en aanpassen</p>
            </div>
            <div className="row-container">
                <div className="select-container">
                    <div className="select1">
                        <select id="team-select">
                            <option value="0">Kies Team</option>
                            <option value="1">Team 1</option>
                            <option value="2">Team 2</option>
                            <option value="3">Team 3</option>
                        </select>
                        <div className="team-select-container">
                            team data
                        </div>
                    </div>
                    <div className="select2">
                        <select id="team-select">
                            <option value="0">Kies Team</option>
                            <option value="1">Team 1</option>
                            <option value="2">Team 2</option>
                            <option value="3">Team 3</option>
                        </select>
                        <div className="team-select-container">
                            team data
                        </div>
                    </div>
                </div>
                <div className="bewerk-teams-container">
                    <div className="team1-container team">
                        team data
                    </div>
                    <div className="team2-container team">
                        team data
                    </div>
                </div>
            </div>
            <div className="teams-button">
                <button>Opslaan</button>
            </div>
        </div>
    )
}


export default Teams;