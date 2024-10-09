# app/__init__.py

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config.config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)

    # Importeer routes hier om circulaire import te voorkomen
    with app.app_context():
        from app.models import User  # Verplaats dit hierheen
        from app.routes import main  # Zorg ervoor dat je de routes importeert

        app.register_blueprint(main)  # Registreer de blueprint

    return app
