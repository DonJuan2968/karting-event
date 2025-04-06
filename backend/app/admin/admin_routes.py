from flask import Blueprint, request, jsonify
from app.admin.admin_models import UsersAdmin
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app.models import User, Teams, TeamMembers
from app import db

admin_bp = Blueprint('admin_bp', __name__)

# Login route
@admin_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = UsersAdmin.query.filter_by(name=data['name']).first()
    
    # Controleer of de gebruiker bestaat en of het wachtwoord overeenkomt
    if not user or user.password != data['password']:
        return jsonify({"msg": "Invalid credentials"}), 401
    
    # Token aanmaken
    access_token = create_access_token(identity=user.name)
    return jsonify(access_token=access_token), 200

# Beveiligde route
@admin_bp.route('/', methods=['GET'])
@jwt_required()
def admin_dashboard():
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200

# totaal aantal inschrijvingen
@admin_bp.route('/api/admin/inschrijvingencijfer', methods=['GET'])
def get_total_inschrijvingen():
    total_inschrijvingen = User.query.count()
    return jsonify({'total_inschrijvingen': total_inschrijvingen})

# totaal aantal teams
@admin_bp.route('/api/admin/teamscijfer', methods=['GET'])
def get_total_teams():
    total_teams = Teams.query.count()
    return jsonify({'total_teams': total_teams})


# ophalen van alle gebruikers
@admin_bp.route('/api/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    user_data = []
    
    for user in users:
        # Zoek naar de teamleden van de gebruiker
        teams = TeamMembers.query.filter_by(member_id=user.user_id).all()
        team_names = []
        
        for team in teams:
            # Haal de teaminformatie op
            team_info = Teams.query.get(team.team_id)
            if team_info:  # Controleer of het team bestaat
                team_names.append(team_info.name)  # Of een andere eigenschap voor de teamnaam
        
        user_data.append({
            'id': user.user_id,
            'username': user.username,
            'email': user.email,
            'leerlingnummer': user.leerlingnummer,
            'teams': team_names
        })

    return jsonify(users=user_data), 200



# toevoegen van een nieuwe gebruiker
@admin_bp.route('/api/users', methods=['GET', 'POST'])
def add_user():
    data = request.get_json()
    
    # Voeg een nieuwe gebruiker toe
    new_user = User(username=data['username'], email=data['email'], leerlingnummer=data['leerlingnummer'])
    db.session.add(new_user)
    db.session.commit()

    # Controleer welke teams beschikbaar zijn
    teams = Teams.query.all()
    available_team = None

    for team in teams:
        team_members_count = TeamMembers.query.filter_by(team_id=team.team_id).count()
        
        # Controleer of het team minder dan 4 leden heeft (of een andere limiet die je wilt)
        if team_members_count < 4:
            available_team = team
            break  # Stop met zoeken als er een beschikbaar team is

    if available_team:  # Als er een beschikbaar team is, voeg de gebruiker toe
        new_team_member = TeamMembers(member_id=new_user.user_id, team_id=available_team.team_id)
        db.session.add(new_team_member)
        db.session.commit()
    else:
        print('Alle teams zijn vol.')

    return jsonify(message='User added successfully'), 201

# API endpoint voor het verwijderen van een gebruiker
@admin_bp.route('/api/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    # Verwijder de team leden die aan deze gebruiker zijn gekoppeld
    TeamMembers.query.filter_by(member_id=user_id).delete()

    # Verwijder de gebruiker
    user = User.query.get(user_id)
    if user:
        db.session.delete(user)
        db.session.commit()
    else:
        print("User not found")

    return jsonify(message='User deleted successfully'), 200

# het wijzigen van een gebruiker
@admin_bp.route('/api/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify(message='User not found'), 404
    data = request.get_json()
    user.username = data.get('username', user.username)
    user.email = data.get('email', user.email)
    user.leerlingnummer = data.get('leerlingnummer', user.leerlingnummer)
    db.session.commit()
    return jsonify(message='User updated successfully'), 200
