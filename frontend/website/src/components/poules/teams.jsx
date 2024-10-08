// import css
import './teams.css';

// import modules
import { useEffect, useState } from 'react';

const Teams = () => {
    const [teams, setTeams] = useState([]);

  // Haal teams op van de backend
  useEffect(() => {
    fetch('http://localhost:5000/api/teams')
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="center teams">
      <h2>Teams</h2>
      <div className="teams-container">
        {teams.length > 0 ? (
          teams.map((team) => (
            <div className="team-card" key={team.id}>
              <h3>{team.name}</h3>
              <ul>
                {team.members.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>Geen teams gevonden...</p>
        )}
      </div>
    </div>
  );
}

export default Teams