# app/routes.py

from flask import Blueprint, request, jsonify
from app import db
from app.models import User
from flask_limiter import Limiter
from app import limiter

main = Blueprint('main', __name__)



@main.route('/')
def home():
    return "Hello, World!"

@main.route('/inschrijvingen', methods=['POST'])
@limiter.limit("1 per minute")  # Maximaal 1 aanvragen per minuut
def create_user():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    leerlingnummer = data.get('leerlingnummer')

    if not username or not email:
        return jsonify({'error': 'Please provide both username, email leerlingnummer'}), 400
    
    new_user = User(username=username, email=email, leerlingnummer=leerlingnummer)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({'message': 'User created successfully'}), 201
