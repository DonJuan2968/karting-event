import './register.css';
import { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        leerlingnummer: '' // Voeg leerlingnummer toe aan de state
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
                    leerlingnummer: formData.leerlingnummer, // Voeg leerlingnummer toe aan de body
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Inschrijving succesvol!');
                setFormData({ name: '', email: '', leerlingnummer: '' }); // Maak de invoervelden leeg
            } else {
                setMessage(data.error || 'Er ging iets mis, probeer het opnieuw.');
            }
        } catch (error) {
            setMessage('Fout bij het verbinden met de server.');
        }
    };

    return (
        <div className="container-form">
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
                        placeholder="Voer je email in"
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
                <button type="submit" className="submit-btn">Inschrijven</button>
                <div className="message">
                  {message && <p className="message">{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default Register;
