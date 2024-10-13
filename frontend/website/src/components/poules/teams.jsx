// import css
import './teams.css';

// import modules
import { useEffect, useState } from 'react';
import axios from 'axios';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Er is een fout opgetreden bij het ophalen van de teams:', error);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      {teams.map((team) => (
        <div key={team.team_id}>
          <h3>{team.name}</h3>
          <ul>
            {team.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Teams;