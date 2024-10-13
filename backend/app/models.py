# app/models.py

from app import db

class User(db.Model):
    __tablename__ = 'inschrijvingen'
    
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    leerlingnummer = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

class Teams(db.Model):
    __tablename__ = 'teams'
    
    team_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), unique=True, nullable=False)

    def __repr__(self):
        return f'<Team {self.name}>'

class TeamMembers(db.Model):
    __tablename__ = 'team_members'
    
    team_members_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    member_id = db.Column(db.Integer, db.ForeignKey('inschrijvingen.user_id'), nullable=False)
    team_id = db.Column(db.Integer, db.ForeignKey('teams.team_id'), nullable=False)

    member = db.relationship('User', backref='team_members')
    team = db.relationship('Teams', backref='team_members')

    def __repr__(self):
        return f'<TeamMember {self.member_id} in Team {self.team_id}>'
