# Karting Event Management Systeem

Een webapplicatie voor het beheren van karting evenement inschrijvingen en team formaties voor VISTA College studenten.

## Functionaliteiten

- Studentenregistratie met e-mail verificatie (@vistacollege.nl)
- Validatie van leerlingnummers
- Automatische team formatie
- Teambeheer
- API endpoints voor frontend integratie

## Technologie Stack

- Python

### Backend

- Python 3.12.0
- Flask (Web Framework)
- SQLAlchemy (ORM)
- MySQL (Database)

## Projectstructuur

```
backend/
├── app/
│   ├── __init__.py      # Applicatie factory en configuratie
│   ├── models.py        # Database modellen
│   ├── routes.py        # API endpoints
│   ├── services.py      # Bedrijfslogica
│   └── utils.py         # Hulpfuncties
├── config/              # Configuratiebestanden
├── mail/               # E-mail templates
├── tests/              # Testbestanden
└── migrations/         # Database migraties
```

## Installatie-instructies

### Vereisten

- Python 3.12.0
- MySQL Server
- Node.js en npm

### Backend Installatie

1. Maak en activeer een virtuele omgeving:

   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```

2. Installeer de benodigde packages:

   ```powershell
   pip install -r requirements.txt
   ```

3. Initialiseer de database:

   ```powershell
   flask db upgrade
   ```

4. Start de ontwikkelserver:
   ```powershell
   python app.py
   ```

### Frontend Installatie

1. Navigeer naar de frontend directory:

   ```powershell
   cd frontend
   ```

2. Installeer de benodigde packages:

   ```powershell
   npm install
   ```

3. Start de ontwikkelserver:
   ```powershell
   npm start
   ```

## API Endpoints

### Registratie

- `POST /api/inschrijvingen`
  - Registreer een nieuwe student
  - Verplichte velden: gebruikersnaam, e-mail, leerlingnummer
  - E-mail moet eindigen op @vistacollege.nl
  - Leerlingnummer moet 6 cijfers bevatten

### Teams

- `GET /api/teams`
  - Haal alle teams op met hun leden

## Beveiligingsfuncties

- Honeypot veld voor spam preventie
- E-mail domein validatie
- Leerlingnummer validatie
- Unieke e-mail en leerlingnummer beperkingen
