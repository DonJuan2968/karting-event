# app/routes.py

from flask import Blueprint, request, jsonify
from app import db
from app.models import User, Teams, TeamMembers
from app.services import create_teams

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "API running"

@main.route('/api/inschrijvingen', methods=['POST'])
def create_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    leerlingnummer = data.get('leerlingnummer')
    honeypot = data.get('honeypot')
    
    if honeypot:  # Controleert of het honeypot veld is ingevuld
        return jsonify({'error': 'Spam detected'}), 400

    if not username or not email or leerlingnummer is None:
        return jsonify({'error': 'Vul je naam, email, en leerlingnummer in'}), 400

    # Controleert of het emailadres eindigt op @vistacollege.nl
    if not email.endswith('@vistacollege.nl'):
        return jsonify({'error': 'Gebruik je VISTA E-mail'}), 400

    # Controleert of het leerlingnummer alleen cijfers bevat
    if not isinstance(leerlingnummer, str) or not leerlingnummer.isdigit():
        return jsonify({'error': 'Leerlingnummer moet alleen cijfers bevatten'}), 400

    # Controleert op de lengte van het leerlingnummer
    if len(leerlingnummer) < 6:
        return jsonify({'error': 'Leerlingnummer moet minimaal 6 cijfers zijn'}), 400
    elif len(leerlingnummer) > 6:
        return jsonify({'error': 'Leerlingnummer mag maximaal 6 cijfers zijn'}), 400

    # Controleert of het email al in gebruik is
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'error': 'Email is al gebruikt'}), 400
    
    # Controleert of het leerlingnummer al in gebruik is
    existing_leerlingnummer = User.query.filter_by(leerlingnummer=int(leerlingnummer)).first()
    if existing_leerlingnummer:
        return jsonify({'error': 'Leerlingnummer is al in gebruik'}), 400

    new_user = User(username=username, email=email, leerlingnummer=int(leerlingnummer))
    db.session.add(new_user)
    db.session.commit()

    create_teams() 
    
    return jsonify({'message': 'User created successfully'}), 201



@main.route('/api/teams', methods=['GET'])
def get_teams():
    teams = Teams.query.all()  # Haal alle teams op
    result = []
    for team in teams:
        members = TeamMembers.query.filter_by(team_id=team.team_id).all()
        member_data = [User.query.get(member.member_id).username for member in members if User.query.get(member.member_id) is not None]
        result.append({
            'team_id': team.team_id,
            'name': team.name,
            'members': member_data
        })
    return jsonify(result), 200
