# app/routes.py

from flask import Blueprint, request, jsonify
from app import db
from app.models import User

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Hello, World!"

@main.route('/inschrijvingen', methods=['GET', 'POST'])
def create_user():
    # username = request.json.get('username')
    # email = request.json.get('email')

    # if not username or not email:
    #     return jsonify({'error': 'Please provide both username and email'}), 400
    
    # new_user = User(username=username, email=email)
    # db.session.add(new_user)
    # db.session.commit()
    
    return "hello"  
# jsonify({'message': 'User created successfully'}), 201
