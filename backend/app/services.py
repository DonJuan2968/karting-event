from app import db
from app.models import User, Teams, TeamMembers
import random

def create_teams():
    # Haal alle deelnemers op
    participants = User.query.outerjoin(TeamMembers, User.user_id == TeamMembers.member_id).filter(TeamMembers.member_id == None).all()
    # Gebruik user_id om leden op te halen
    participant_ids = [user.user_id for user in participants]
    # Willekeurige volgorde van deelnemers
    random.shuffle(participant_ids)
    
    for participant_id in participant_ids:
        # Zoek willekeurig een team met minder dan 4 leden
        teams_with_space = (db.session.query(Teams)
                            .join(TeamMembers)
                            .group_by(Teams.team_id)
                            .having(db.func.count(TeamMembers.member_id) < 4)
                            .all())
        
        if teams_with_space:
            # Kies willekeurig een team dat nog ruimte heeft
            team = random.choice(teams_with_space)
        else:
            # Als er geen team is met minder dan 4 leden, maak een nieuw team aan
            team = Teams(name=f'Team {Teams.query.count() + 1}')
            db.session.add(team)
            db.session.commit()

        # Voeg de deelnemer toe aan het gekozen team (of nieuw aangemaakt team)
        new_member = TeamMembers(member_id=participant_id, team_id=team.team_id)
        db.session.add(new_member)

    db.session.commit()