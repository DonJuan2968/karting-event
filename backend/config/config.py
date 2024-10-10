import os
from dotenv import load_dotenv

load_dotenv()  # Laad de omgevingsvariabelen vanuit .env

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY',)
    SQLALCHEMY_ENGINE_OPTIONS = {
        "pool_pre_ping": True,  # Dit zorgt ervoor dat de verbinding wordt getest voordat deze wordt gebruikt
        "pool_recycle": 1800,   # Dit voorkomt dat verbindingen worden verbroken na een bepaalde tijd
    }
