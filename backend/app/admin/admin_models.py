from app import db

class UsersAdmin(db.Model):
    __tablename__ = 'usersadmin'
    
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<UserAdmin {self.name}>'


# class berichten(db.Model):
#     __tablename__ = 'contact-berichten'
    
#     contact_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
#     user_id = db.Column(db.Integer, nullable=False)
#     bericht = db.Column(db.String(255), nullable=False)

#     user_id = db.relationship('User', backref='usersadmin')

#     def __repr__(self):
#         return f'<UserAdmin {self.user_id}>'
