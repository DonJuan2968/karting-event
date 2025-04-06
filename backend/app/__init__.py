from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config.config import Config
from flask_cors import CORS
from flask_jwt_extended import JWTManager  # JWT importeren

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    
    allowed_origins = [
        "http://localhost:5173",
        "http://localhost:5174"
    ]

    cors = CORS(app, resources={r"/*": {"origins": allowed_origins}}, supports_credentials=True, methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"])

    # JWT configureren gebruikt SECRET_KEY van mijn config
    jwt = JWTManager(app)

    # Importeer en registreer routes
    with app.app_context():
        from app.routes import main # website-routes
        from app.admin.admin_routes import admin_bp  # Admin-routes

        # Blueprints registreren
        app.register_blueprint(main) # website blueprint
        app.register_blueprint(admin_bp) # Admin Blueprint
    
    return app
