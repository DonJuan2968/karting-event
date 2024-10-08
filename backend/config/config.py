import os
from dotenv import load_dotenv

load_dotenv()  # Laad de omgevingsvariabelen vanuit .env

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv('SECRET_KEY',)
