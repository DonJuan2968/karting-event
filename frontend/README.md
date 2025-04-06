# Karting Event Frontend

De frontend applicatie voor het Karting Event Management Systeem, bestaande uit een publieke website en een admin panel.

## Onderdelen

### Website

- Gebruiksvriendelijk registratieformulier
- Real-time team overzicht
- Responsive design voor alle apparaten

### Admin Panel

- Teambeheer interface
- Registratie overzicht
- Gebruikersbeheer

## Technologie Stack

- React.js
- Vite (Build tool)
- Node.js
- npm
- Axios (API calls)
- CSS/SCSS

## Projectstructuur

```
frontend/
├── website/            # Publieke website
│   ├── public/        # Statische bestanden
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── main.js
│   └── package.json
└── adminpanel/        # Admin interface
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── styles/
    │   ├── App.js
    │   └── main.js
    └── package.json
```

## Installatie-instructies

### Vereisten

- Node.js (versie 14 of hoger)
- npm (meest recente versie)

### Website Installatie

1. Navigeer naar de website directory:

   ```powershell
   cd frontend/website
   ```

2. Installeer de benodigde packages:

   ```powershell
   npm install
   ```

3. Start de ontwikkelserver:
   ```powershell
   npm run dev
   ```

### Admin Panel Installatie

1. Navigeer naar de admin panel directory:

   ```powershell
   cd frontend/adminpanel
   ```

2. Installeer de benodigde packages:

   ```powershell
   npm install
   ```

3. Start de ontwikkelserver:
   ```powershell
   npm run dev
   ```

## Ontwikkeling

### Beschikbare Scripts

Voor zowel website als admin panel:

- `npm run dev`: Start de ontwikkelserver
- `npm run build`: Bouwt de productie versie
- `npm run lint`: Voert code kwaliteitscontrole uit
- `npm run preview`: Preview de productie build

### API Integratie

Beide applicaties communiceren met de volgende backend endpoints:

- `POST /api/inschrijvingen`: Registratie van nieuwe studenten
- `GET /api/teams`: Ophalen van team informatie

## Beveiliging

- Environment variabelen voor API URLs
- Input validatie
- Error handling
- Protected routes voor admin panel
