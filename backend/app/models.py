# inschrijf modal
from app import db



class User(db.Model):
    __tablename__ = 'inschrijvingen'
    
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(50), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    leerlingnummer = db.Column(db.Integer, unique=True, nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'