from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config.config import Config
from flask_cors import CORS  # Importeer CORS

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}}) 

    # Importeert routes
    with app.app_context():
        from app.routes import main
        

        app.register_blueprint(main)
    
    return app
