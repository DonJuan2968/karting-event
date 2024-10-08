from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from config.config import Config

print('test -> ' + __name__)

db = SQLAlchemy()
migrate = Migrate()

app = Flask(__name__)

def create_app():
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)

    @app.route('/')
    def home():
        return "Hello, World!"

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
