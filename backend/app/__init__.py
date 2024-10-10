from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config.config import Config
from flask_cors import CORS  # Importeer CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

db = SQLAlchemy()
limiter = Limiter(key_func=get_remote_address)

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    
    # Voeg CORS toe voor de hele app
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}) 
    limiter.init_app(app)

    # Importeer routes hier om circulaire import te voorkomen
    with app.app_context():
        from app.models import User  # Verplaats dit hierheen
        from app.routes import main  # Zorg ervoor dat je de routes importeert

        app.register_blueprint(main)  # Registreer de blueprint

    return app
