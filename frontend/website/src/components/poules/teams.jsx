// import css
import './teams.css';

// import modules
import { useEffect, useState } from 'react';
import axios from 'axios';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTeams, setFilteredTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teams');
        setTeams(response.data);
        setFilteredTeams(response.data); // Initialize filtered teams with all teams
      } catch (error) {
        console.error('Er is een fout opgetreden bij het ophalen van de teams:', error);
      }
    };

    fetchTeams();
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    // Filter teams by checking if any member matches the search term
    const filtered = teams.filter((team) =>
      team.members.some((member) => member.toLowerCase().includes(searchValue))
    );
    setFilteredTeams(filtered);
  };

  return (
    <>
      <div className="teams-container">
        <h2>Teams</h2>
        <input
          type="text"
          placeholder="Zoek op naam"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />

        <div className="teams-grid">
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
              <div key={team.team_id} className="team-card">
                <h3>{team.name}</h3>
                <ul>
                  {team.members.map((member, index) => (
                    <li key={index}>{member}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p>Geen resultaten gevonden.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Teams;
