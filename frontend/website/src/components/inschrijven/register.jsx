import './register.css';
import { useState } from 'react';

import background from '../../assets/inbackground.png'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        leerlingnummer: '',
        honeypot: '' // Voeg hier het honeypot-veld toe
    });

    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:5000/inschrijvingen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.name,
                    email: formData.email,
                    leerlingnummer: formData.leerlingnummer,
                    honeypot: formData.honeypot, // Voeg het honeypot-veld toe aan de body
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Inschrijving succesvol!');
                setFormData({ name: '', email: '', leerlingnummer: '', honeypot: '' }); // Reset ook honeypot
            } else {
                setMessage(data.error || 'Er ging iets mis, probeer het opnieuw.');
            }
        } catch (error) {
            setMessage('Fout bij het verbinden met de server (komt van onze kant).');
        }
    };

    return (
        <>
            <div className="container-form">
                {/* Afbeelding aan de linkerkant */}
                <div className="image-left">
                    <img src={background} alt="Beschrijving afbeelding" />
                </div>
                
                <div className="mobile">
                    <div className={`message-container ${message ? 'visible' : ''}`}>
                        {message && <p className="message">{message}</p>}
                    </div>
                </div>

                {/* Formulier aan de rechterkant */}
                <form className="inschrijf-form" onSubmit={handleSubmit}>
                    <h2>Inschrijven</h2>
                    <div className="form-group">
                        <label htmlFor="name">Naam:</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Voer je naam in"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Voer je (VISTA E-mail) in"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="leerlingnummer">Leerlingnummer:</label>
                        <input
                            type="number"
                            id="leerlingnummer"
                            value={formData.leerlingnummer}
                            onChange={handleInputChange}
                            placeholder="Voer je leerlingnummer in"
                            required
                        />
                    </div>
                    {/* Honeypot veld - verborgen voor gebruikers */}
                    <input
                        type="text"
                        id="honeypot"
                        value={formData.honeypot}
                        onChange={handleInputChange}
                        style={{ display: 'none' }}
                    />
                    <button type="submit" className="submit-btn">Inschrijven</button>
                </form>
            </div>
            <div className="desktop">
                <div className={`message-container ${message ? 'visible' : ''}`}>
                    {message && <p className="message">{message}</p>}
                </div>
            </div>
        </>
    );
};

export default Register;
